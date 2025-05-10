import { createSlice } from '@reduxjs/toolkit';

export const raceSlice = createSlice({
    name: 'race',
    initialState: {
        races: [],
        isRacesSaving: false,
        messageRacesError: undefined
    },
    reducers: {
        saving: (state) => {
            state.isRacesSaving = true;
        },
        setRaces: (state, {payload}) => {
            state.races = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const {saving, setRaces } = raceSlice.actions;