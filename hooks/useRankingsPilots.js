import { useDispatch, useSelector } from "react-redux";
import formulaApi from "../api/formulaApi";
import { saving, setRankings } from "../store/rankingsPilots/rankingsPilotsSlice";

export const useRankingsPilots = () => {

    const {rankings, isSaving, messageError} = useSelector(state => state.rankingsPilot);
    const dispatch = useDispatch();


    const startGetRankingsPilot = async(season = 2023) => {
        if(rankings.length === 0) {
            console.log("se ejecuto otra vez");
            dispatch(saving());
            const {data} = await formulaApi.get(`rankings/drivers?season=${season}`);
            dispatch(setRankings(data.response))
        };
    };

    return {
        //Atributos
        rankings,
        isSaving,
        messageError,

        //Metodos
        startGetRankingsPilot

    }
}