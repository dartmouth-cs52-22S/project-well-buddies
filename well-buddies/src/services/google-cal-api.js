import axios from 'axios';
import Moment from 'moment';

const API_URL = 'https://www.googleapis.com/calendar/v3/';
const API_KEY = 'AIzaSyCvvnoQG--w8CR6pVkOMxqm-cid2ZNDZxY';

export function getPrimaryCalendar(accessToken) {
  const params = {
    access_token: accessToken,
  };

  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}calendars/primary`, { params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}

export function getCalendarEvents(params) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}calendars/primary/events`, { params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}

export function addEvent(body, accessToken) {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  console.log('axios', body);

  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}calendars/primary/events`, body, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}

export function getCalendarEvent(accessToken, eventID) {
  const params = {
    access_token: accessToken,
  };

  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}calendars/primary/events/${eventID}`, { params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}

export function getFreeBusy(body, accessToken) {
  const start = Moment().startOf('day').hour(10).toISOString();
  const end = Moment().startOf('day').hour(22).toISOString();
  // const diff = Moment.duration(end.diff(start)).asMinutes();

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}freeBusy`, body, config)
      .then((response) => {
        const busyTimes = response?.data?.calendars?.primary?.busy;
        const freeTimes = [];
        if (Object.entries(busyTimes).length === 0) {
          freeTimes.push([start, end]);
        }
        for (let i = 0; i < Object.entries(busyTimes).length; i++) {
          if (i === 0) {
            // if start of day is different from start time of first busy chunk, push chunk to free time
            if (start !== busyTimes[i].start) {
              freeTimes.push({ start, end: busyTimes[i].start, duration: 0 });
            }
            // if end of day is different from end time of last busy chunk, push chunk to free time
          } if (i === Object.entries(busyTimes).length - 1 && (end !== busyTimes[i].end)) {
            freeTimes.push({ start: busyTimes[i].end, end, duration: 0 });
          } else {
            // for all other chunks of time, push to free time the end time of a busy time and the start time of the following busy time
            freeTimes.push({ start: busyTimes[i].end, end: busyTimes[i + 1].start, duration: 0 });
          }
        }
        Object.entries(freeTimes).forEach((time, idx) => {
          const diff = Moment.duration(Moment(freeTimes[idx].end).diff(Moment(freeTimes[idx].start))).asMinutes();
          freeTimes[idx].duration = diff;
        });
        const activityTime = freeTimes[Math.floor(Math.random() * freeTimes.length)];
        resolve(activityTime);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}
