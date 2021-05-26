import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import subscriptionReducer from './subscriptionSlice';
import channelReducer from './channelSlice';
import playlistItemsReducer from './playlistItemsSlice';
import videoReducer from './videoSlice';
import commentReducer from './commentSlice';

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
    channel: channelReducer,
    playListItems: playlistItemsReducer,
    video: videoReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
