import { useDispatch, useSelector } from "react-redux";
import formulaApi from "../api/formulaApi";
import { saving, setRankings } from "../store/rankingsTeams/rankingsTeamSlice";

export const useRankigsTeam = () => {
    const dispatch = useDispatch();
    const { isSaving, messageError, rankings } = useSelector(state => state.rankingsTeam);

    const startGetRankigsTeam = async(season = 2023) => {
        
        if(rankings.length === 0){
            dispatch(saving());
            const { data } = await formulaApi.get(`rankings/teams?season=${season}`)
            console.log(data.response[0]);
            dispatch(setRankings(data.response));
        }
    };

    return {
        //Atributos
        rankings,
        isSaving,
        messageError,

        //Metodos
        startGetRankigsTeam
    }
};