import { combineReducers } from '@reduxjs/toolkit';
import itemHomnayReducer from './ItemHomNaySlices';
import ListSongReducer from './ListSongSlices';
import NewListSongReducer from './NewListSong';
import ArtistReducer from './ArtistSlice';
import AlbumReducer from './AlbumSlice';

const rootReducer = combineReducers({
  itemHomnay: itemHomnayReducer,
  ListSong:ListSongReducer,
  NewListSong:NewListSongReducer,
  Artist: ArtistReducer,
  Album:AlbumReducer,


});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
