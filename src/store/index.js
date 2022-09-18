import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
