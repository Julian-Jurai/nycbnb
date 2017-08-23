import { LOGINSIGNUP, LOGOUT } from '../actions/session_buttons_actions';
import { merge } from 'lodash';


const SessionButtonsReducer = (state = false, action) => {

  Object.freeze(state);
  switch(action.type) {
    case LOGINSIGNUP:
      return action.buttonAction;
    case LOGOUT:
      return action.buttonAction;
    default:
      return state;
  }
};

export default SessionButtonsReducer;
