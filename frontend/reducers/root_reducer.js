import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import SessionButtonsReducer from './session_buttons_reducer';
import HomesReducer from './homes_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  session_ui: SessionButtonsReducer,
  homes: HomesReducer
});

export default rootReducer;
