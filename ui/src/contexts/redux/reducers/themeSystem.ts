import { createSlice } from '@reduxjs/toolkit';

export enum ThemeSystem {
    LightMode = 0,
    DarkMode = 1,
}

export interface IThemeSystem {
    mode: ThemeSystem;
}

const initialState: IThemeSystem = {
    mode: ThemeSystem.LightMode,
};

export const themeSystemSlice = createSlice({
    name: 'themeSystem',
    initialState,
    reducers: {
        GLOBAL_THEME_SYSTEM_TOGGLE: (state) => {
            state.mode =
                state.mode === ThemeSystem.LightMode ? ThemeSystem.DarkMode : ThemeSystem.LightMode;
        },
    },
});

const {
    actions: { GLOBAL_THEME_SYSTEM_TOGGLE },
    reducer: currentUserReducer,
} = themeSystemSlice;

export { GLOBAL_THEME_SYSTEM_TOGGLE, currentUserReducer };
