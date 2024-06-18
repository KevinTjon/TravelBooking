import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Flight to New York', date: '2023-06-01', status: 'Confirmed' },
  { id: 2, title: 'Hotel in Paris', date: '2023-07-15', status: 'Pending' },
];

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload);
    },
    updateBooking: (state, action) => {
      const index = state.findIndex(booking => booking.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addBooking, updateBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
