import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import playerReducer from "../features/player/playerSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    player: playerReducer,
  },
});
