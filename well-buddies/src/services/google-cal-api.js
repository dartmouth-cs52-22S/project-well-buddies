import axios from 'axios';

const API_URL = 'https://www.googleapis.com/calendar/v3/calendars/';
const API_KEY = 'AIzaSyCvvnoQG--w8CR6pVkOMxqm-cid2ZNDZxY';
// const CALENDAR_ID = 'q4hprhq5gnjkrpqsljr3b0541o@group.calendar.google.com';

// const params = {
//   key: API_KEY,
//   maxResults: 15,
// };

export function getPrimaryCalendar(accessToken) {
  const params = {
    access_token: accessToken,
  };

  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}primary`, { params })
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
  // const params = {
  //   access_token: accessToken,
  // };
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}primary/events`, { params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}
export function addEvent(event) {
  console.log(event);

  // const end = { dateTime: new Date().toISOString() };
  // const start = { dateTime: new Date().toISOString() };
  // const summary = 'test summary';

  // axios.post(`${API_URL}${calendarID}/events`, { end, start, summary })

  //   .then((response) => {
  //     console.log(`calendar api worked!: ${response}`);
  //   })
  //   .catch((error) => {
  //     console.log(`calendar api error: ${error}`);
  //   });
  axios({
    method: 'post',
    url: 'https://v1.nocodeapi.com/rheanna665/calendar/iSVwTfMCKPqPLuBC/event',
    params: {},
    data: {
      summary: 'Event summary', start: { dateTime: '2021-02-21T21:00:00+05:30', timeZone: 'IST' }, end: { dateTime: '2021-02-21T21:30:00+05:30', timeZone: 'IST' }, recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
    },
  }).then((response) => {
    // handle success
    console.log(response.data);
  }).catch((error) => {
    // handle error
    console.log(error);
  });
}

export function getCalendarEvent(accessToken, eventID) {
  const params = {
    access_token: accessToken,
  };

  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}primary/events/${eventID}`, { params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}
