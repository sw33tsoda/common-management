import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './reducers';

const store = configureStore({
    reducer: {
        currenUser: currentUserReducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
