import { createSlice } from '@reduxjs/toolkit';

export const rankingPilotsSlice = createSlice({
    name: 'rankingPilots',
    initialState: {
        rankings: [],
        isSaving: false,
        messageError: undefined
    },
    reducers: {
        saving: (state) => {
            state.isSaving = true
        },
        setRankings: (state, {payload} ) => {
            state.rankings = payload;
            state.isSaving = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { saving, setRankings } = rankingPilotsSlice.actions;