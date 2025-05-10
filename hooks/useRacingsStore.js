import { useDispatch, useSelector } from "react-redux";
import formulaApi from "../api/formulaApi";
import { saving, setRaces } from "../store/race/raceSlice";

export const useRacinngStore = () => {

    const { races, isRacesSaving, messageRacesError} = useSelector(state => state.race);
    const dispatch = useDispatch();

    const startGetRacing = async(season = 2023) => {
        dispatch(saving());

        const { data } = await formulaApi.get(`races?season=${season}&type=Race`);

        console.log(data.response[0]);
        dispatch( setRaces(data.response));
    };

    return {
        //Atributos
        races,
        isRacesSaving,
        messageRacesError,

        //Metodos
        startGetRacing

    }
}