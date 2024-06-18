import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin' },
  // Add more initial users as needed
];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        Object.assign(existingUser, action.payload);
      } else {
        state.push(action.payload);
      }
    },
    // Add more reducers as needed
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
