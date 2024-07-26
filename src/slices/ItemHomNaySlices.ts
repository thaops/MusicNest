import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../API';

interface ItemState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemState = {
  data: [],
  loading: false,
  error: null,
};

// Thunk để gọi API
export const fetchItems = createAsyncThunk(
  'itemHomnay/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/itemsHomnay`);
      return response.data;  
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const itemHomnaySlice = createSlice({
  name: 'itemHomnay',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default itemHomnaySlice.reducer;
