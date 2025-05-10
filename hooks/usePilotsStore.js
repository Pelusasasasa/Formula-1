import formulaApi from "../api/formulaApi";

export const usePilotsStore = () => {

    const startGetPilots = async() => {
        const { data } = await formulaApi.get(`drivers?id=${66}`);

        console.log(data.response);
    }


    return {
        //Atributos

        //Metodos
        startGetPilots
    }
};