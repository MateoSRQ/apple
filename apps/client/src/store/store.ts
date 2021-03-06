import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import * as appSlice from './slices/app';

export const store = configureStore({
  reducer: {
    app: appSlice.Slice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
