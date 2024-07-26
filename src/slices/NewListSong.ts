import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../API';

interface NewListSongState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NewListSongState = {
  data: [],
  loading: false,
  error: null,
};


export const fetchNewListSongs = createAsyncThunk(
  'ListSongHomnay/fetchNewListSongs',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/ListSong`);
      console.log('API Response:', response.data);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const NewListSongSlice = createSlice({
  name: 'newListSong',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewListSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewListSongs.fulfilled, (state, action) => {
        console.log('Data in fulfilled case:', action.payload); 
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNewListSongs.rejected, (state, action) => {
        console.error('Error in rejected case:', action.payload); 
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default NewListSongSlice.reducer;
