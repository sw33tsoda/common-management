import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './reducers';
import { currentThemeSystemReducer } from './reducers/themeSystem';

const store = configureStore({
    reducer: {
        currenUser: currentUserReducer,
        themeSystem: currentThemeSystemReducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
