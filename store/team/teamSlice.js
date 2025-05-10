import { createSlice } from '@reduxjs/toolkit';

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        teams: [],
        isSaving: false,
        messageError: undefined
    },
    reducers: {
        saving: (state) => {
            state.isSaving = true
        },
        setTeams: (state, {payload}) => {
            state.teams = payload;
            state.isSaving = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { saving, setTeams } = teamSlice.actions;