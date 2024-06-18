import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    bookings: bookingReducer,
  },
});

export default store;
