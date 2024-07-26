import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../API';

interface AlbumState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: AlbumState = {
  data: [],
  loading: false,
  error: null,
};


export const fetchAlbums = createAsyncThunk(
  'Album/fetchAlbums',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/Album`);
      console.log('API Response:', response.data);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const AlbumSlice = createSlice({
  name: 'Album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        console.log('Data in fulfilled case:', action.payload); 
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        console.error('Error in rejected case:', action.payload); 
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default AlbumSlice.reducer;
