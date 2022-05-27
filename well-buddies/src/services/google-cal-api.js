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
