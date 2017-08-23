import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import SessionButtonsReducer from './session_buttons_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  session_ui: SessionButtonsReducer,
});

export default rootReducer;
