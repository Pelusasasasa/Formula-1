import { createSlice } from '@reduxjs/toolkit';

export const pilotSlice = createSlice({
    name: 'pilot',
    initialState: {
        pilots: [],
        pilotActive: {},
        mensagePilotError: undefined
    },
    reducers: {
        setPilotos: (state, {payload}) => {
            state.pilots = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPilotos } = pilotSlice.actions;