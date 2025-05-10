import { useDispatch, useSelector } from "react-redux";
import formulaApi from "../api/formulaApi";
import { saving, setTeams } from "../store/team/teamSlice";

export const useTeamsStore = () => {
    const dispatch = useDispatch();
    const {teams, isSaving, messageError} = useSelector(state => state.team);

    const startGetTeams = async() => {
        if(teams.length === 0){
            dispatch(saving());

            const { data } = await formulaApi.get(`teams`);
            
            dispatch(setTeams(data.response));
        }
    }


    return {
        //Atributos
        teams,
        isSaving,
        messageError,

        //Metodos
        startGetTeams
    }
};