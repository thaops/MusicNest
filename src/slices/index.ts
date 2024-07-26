import { combineReducers } from '@reduxjs/toolkit';
import itemHomnayReducer from './ItemHomNaySlices';

const rootReducer = combineReducers({
  itemHomnay: itemHomnayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
