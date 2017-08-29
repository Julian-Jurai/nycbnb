import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import SessionButtonsReducer from './session_buttons_reducer';
import HomesReducer from './homes_reducer';
import BookingReducer from './booking_reducer';
import TripsReducer from './trips_reducer';
import FiltersReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  session_ui: SessionButtonsReducer,
  booking_ui: BookingReducer,
  trips_ui: TripsReducer,
  homes: HomesReducer,
  filters: FiltersReducer
});

export default rootReducer;
