import AsyncStorage from '@react-native-async-storage/async-storage';
import Moment from 'moment';
import { getTodayActivity, getActivity } from '../../services/activity';
import { getFreeBusy, addEvent } from '../../services/google-cal-api';

export const ActionTypes = {
  FETCH_ACTIVITIES: 'FETCH_ACTIVITIES',
  FETCH_TODAY_ACTIVITY: 'FETCH_TODAY_ACTIVITY',
};

export function fetchActivities() {
  return async (dispatch) => {
    const jwt = await AsyncStorage.getItem('jwt');
    const accessToken = await AsyncStorage.getItem('googleAccessCode');
    const freeBusyArgs = {
      timeMin: Moment().hour(10).minute(0).second(0)
        .toISOString(),
      timeMax: Moment().hour(22).minute(0).second(0)
        .toISOString(),
      groupExpansionMax: 1,
      calendarExpansionMax: 1,
      items: [
        {
          id: 'primary',
        },
      ],
    };

    if (jwt !== null && accessToken !== null) {
      const activityTime = await getFreeBusy(freeBusyArgs, accessToken);

      getActivity(jwt, activityTime.duration)
        .then((response) => {
          const activity = response.data;
          activity.start = activityTime.start;
          activity.end = Moment(activityTime.start).add(activity.duration, 'm');

          const addEventBody = {
            summary: `WELLNESS: ${activity.title}`,
            start: { dateTime: activity.start },
            end: { dateTime: activity.end },
          };

          // dispatch({ type: ActionTypes.FETCH_ACTIVITIES, payload: activity });

          addEvent(addEventBody, accessToken).then(() => {
            dispatch({ type: ActionTypes.FETCH_ACTIVITIES, payload: activity });
          })
            .catch((error) => {
              console.log(`error adding activity: ${error}`);
              /* dispatch({ type: ActionTypes.ERROR_SET, error }); */
            });
        })
        .catch((error) => {
          console.log(`error getting activity: ${error}`);
        });
    }
  };
}

export function fetchTodayActivity() {
  return async (dispatch) => {
    const jwt = await AsyncStorage.getItem('jwt');
    if (jwt !== null) {
      getTodayActivity(jwt)
        .then((response) => {
          dispatch({ type: ActionTypes.FETCH_TODAY_ACTIVITY, payload: response.data });
        })
        .catch((error) => {
          console.log(`error getting activity today: ${error}`);
        });
    }
  };
}
