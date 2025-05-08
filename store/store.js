import { configureStore } from "@reduxjs/toolkit";
import { pilotSlice } from "./pilot/pilotSlice";

export const store = configureStore({
    reducer: {
        pilot: pilotSlice.reducer
    }
})