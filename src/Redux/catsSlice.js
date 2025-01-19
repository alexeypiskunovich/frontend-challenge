import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCats } from '../api/catApi';

export const loadCats = createAsyncThunk('cats/loadCats', async (page) => {
  const response = await fetchCats(page);
  return response;
});

const initialState = {
  cats: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  status: 'idle',
  error: null,
  page: 0,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(cat => cat.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cats = [...state.cats, ...action.payload];
      })
      .addCase(loadCats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementPage, addToFavorites, removeFromFavorites } = catsSlice.actions;

export default catsSlice.reducer;
