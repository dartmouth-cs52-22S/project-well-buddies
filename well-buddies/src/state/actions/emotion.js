import {
  getEmotions, getEmotion, setEmotion, newEmotion,
} from '../../services/emotion';

export const ActionTypes = {
  FETCH_EMOTION: 'FETCH_EMOTION',
  FETCH_EMOTIONS: 'FETCH_EMOTIONS',
};

export function fetchEmotions() {
  return (dispatch) => {
    getEmotions()
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_EMOTIONS, payload: response.data.items });
      })
      .catch((error) => {
        console.log(`error fetching emotions ${error}`);
      });
  };
}

export function fetchEmotion() {
  return (dispatch) => {
    console.log('feting emotion');
    getEmotion()
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_EMOTION, payload: response });
      })
      .catch((error) => {
        console.log(`error fetching emotion ${error}`);
      });
  };
}

export function changeEmotion(emotion) {
  return (dispatch) => {
    setEmotion(emotion)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_EMOTION, payload: response });
      })
      .catch((error) => {
        console.log(`error changing emotions ${error}`);
      });
  };
}

export function createEmotion(emotion) {
  return (dispatch) => {
    newEmotion(emotion)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_EMOTION, payload: response });
      })
      .catch((error) => {
        console.log(`error creating emotions ${error}`);
      });
  };
}
