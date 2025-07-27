import { formulaApi } from "@/core/api/formulaApi";

export const getRankigsDrivers = async(season = 2019) => {
    try {
        const { data } = await formulaApi.get(`rankings/drivers`, {
            params: {
                season
            }
        });

        if(data.errors.length === 0) {
            return data.response;
        }
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener los rankings de los pilotos");
    }
}