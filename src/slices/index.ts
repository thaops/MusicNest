import { combineReducers } from '@reduxjs/toolkit';
import itemHomnayReducer from './ItemHomNaySlices';
import ListSongReducer from './ListSongSlices';

const rootReducer = combineReducers({
  itemHomnay: itemHomnayReducer,
  ListSong:ListSongReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
