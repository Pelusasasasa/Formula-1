import { FlatList, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import PilotCard from "../components/PilotCard";
import { usePilotsStore } from "../hooks/usePilotsStore";
import { useEffect } from "react";

const pilotos = [
    {
        name: 'Max Verstappen',
        nacionalidad: 'Paises Bajos',
        image: 'https://media.api-sports.io/formula-1/drivers/50.png',
        numero: 1
    },
    {
        name: 'Franco Colapinto',
        nacionalidad: 'Argentina',
        image: 'https://media.api-sports.io/formula-1/drivers/88.png',
        numero: 45
    },
]

export default function Pilots(){

    const { startGetPilots } = usePilotsStore();

    useEffect(() => {
        startGetPilots()
    }, [])

    const renderItem = ({item}) => (
        <PilotCard item={item}/>
    )

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Pilotos de F1</Text>
            <FlatList
                data={pilotos}
                keyExtractor={elem => elem.numero}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }} // opcional
                contentContainerStyle={{ padding: 16 }}
            />
        </View>
    )
};
