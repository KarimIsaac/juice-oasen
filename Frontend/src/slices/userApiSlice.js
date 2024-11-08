import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
};

const userApiSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.email = null;
    },
  },
});

export const { setUserEmail, clearUser } = userApiSlice.actions;
export default userApiSlice.reducer;