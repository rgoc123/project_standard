import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import reviewItemReducer from './reviewItemReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  reviewItems: reviewItemReducer
});

export default rootReducer;
