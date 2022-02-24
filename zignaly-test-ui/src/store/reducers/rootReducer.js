import { combineReducers } from 'redux';
import { phoneReducer } from './phoneReducer';

const rootReducer = combineReducers({
  phones: phoneReducer,
});

export default rootReducer;