import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../API';

interface ArtistState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ArtistState = {
  data: [],
  loading: false,
  error: null,
};


export const fetchArtists = createAsyncThunk(
  'Artist/fetchArtists',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/Artist`);
      console.log('API Response:', response.data);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const ArtistSlice = createSlice({
  name: 'Artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        console.log('Data in fulfilled case:', action.payload); 
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchArtists.rejected, (state, action) => {
        console.error('Error in rejected case:', action.payload); 
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default ArtistSlice.reducer;
