import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ListSongState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ListSongState = {
  data: [],
  loading: false,
  error: null,
};


export const fetchListSongs = createAsyncThunk(
  'ListSongHomnay/fetchListSongs',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://192.168.1.177:3000/ListSong/byIdList/${id}`);
      console.log('API Response:', response.data);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const ListSongSlice = createSlice({
  name: 'ListSong',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListSongs.fulfilled, (state, action) => {
        console.log('Data in fulfilled case:', action.payload); 
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListSongs.rejected, (state, action) => {
        console.error('Error in rejected case:', action.payload); 
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default ListSongSlice.reducer;
