import { createSlice } from '@reduxjs/toolkit';

export interface ICurrentUser {
    id: string;
    name: string;
}

const initialState: ICurrentUser = {
    id: '',
    name: '',
};

export const currenUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        GLOBAL_SET_CURRENT_USER: (state, action) => {
            state = action.payload;
        },
        GLOBAL_UNSET_CURRENT_USER: () => initialState,
    },
});

const {
    actions: { GLOBAL_SET_CURRENT_USER, GLOBAL_UNSET_CURRENT_USER },
    reducer: currentUserReducer,
} = currenUserSlice;

export {
    GLOBAL_SET_CURRENT_USER,
    GLOBAL_UNSET_CURRENT_USER,
    currentUserReducer,
};
