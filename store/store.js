import { configureStore } from "@reduxjs/toolkit";
import { pilotSlice } from "./pilot/pilotSlice";
import { teamSlice } from "./team/teamSlice";
import { raceSlice } from "./race/raceSlice";
import { rankingPilotsSlice } from "./rankingsPilots/rankingsPilotsSlice";
import { rankingsTeamSlice } from "./rankingsTeams/rankingsTeamSlice";

export const store = configureStore({
    reducer: {
        pilot: pilotSlice.reducer,
        team: teamSlice.reducer,
        race: raceSlice.reducer,
        rankingsPilot: rankingPilotsSlice.reducer,
        rankingsTeam: rankingsTeamSlice.reducer
    }
})