import axios from 'axios';

const API_URL = 'https://www.googleapis.com/calendar/v3/calendars/';
const API_KEY = 'AIzaSyCvvnoQG--w8CR6pVkOMxqm-cid2ZNDZxY';
const CALENDAR_ID = 'q4hprhq5gnjkrpqsljr3b0541o@group.calendar.google.com';

const googleCal = () => {
  const params = {
    key: API_KEY,
    maxResults: 15,
  };

  return new Promise((resolve, reject) => {
    console.log(`${API_URL}${CALENDAR_ID}/events`);
    axios.get(`${API_URL}${CALENDAR_ID}/events`, { params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`calendar api error: ${error}`);
        reject(error);
      });
  });
};

export default googleCal;
