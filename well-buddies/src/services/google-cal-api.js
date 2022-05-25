import axios from 'axios';

const API_URL = 'https://www.googleapis.com/calendar/v3/calendars/';
const API_KEY = 'AIzaSyCvvnoQG--w8CR6pVkOMxqm-cid2ZNDZxY';
// const CALENDAR_ID = 'q4hprhq5gnjkrpqsljr3b0541o@group.calendar.google.com';

// const params = {
//   key: API_KEY,
//   maxResults: 15,
// };

export function getPrimaryCalendar(accessToken) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}primary?access_token=${accessToken}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}

export function getCalendarEvents(accessToken) {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}primary/events?access_token=${accessToken}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
}
