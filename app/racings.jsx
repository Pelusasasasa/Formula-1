import { StyleSheet, FlatList, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { racingStyles } from "../styles/rancing";
import { useEffect } from "react";
import { useRacinngStore } from "../hooks";


export default function Racings(){

    const { startGetRacing, races, isRacesSaving } = useRacinngStore();

    useEffect(() => {
        startGetRacing();
    }, [])

    const renderItem = ({item}) => (
        <View style={racingStyles.racingContainer}>
            <View style={racingStyles.racingTitle}>
                <Text style={racingStyles.racingName}>{item.competition.name}</Text>
                <Text style={racingStyles.racingStatus}>{item.status}</Text>
            </View>
            <View style={racingStyles.infoRacing}>
                <Ionicons size={22} color='#fff' name="location-outline" />
                <Text style={racingStyles.infoTextRacing}>{item.circuit.name}</Text>
            </View>
            <View style={racingStyles.infoRacing}>
                <Ionicons size={22} color='#fff' name="calendar-clear-outline" />
                <Text style={racingStyles.infoTextRacing}>{item.date.slice(0,10).split('-', 3).reverse().join('/')}</Text>
            </View>
            <View style={racingStyles.infoRacing}>
                <Ionicons size={22} color='#fff' name="time-outline" />
                <Text style={racingStyles.infoTextRacing}>{item.date.slice(11,16)}</Text>
            </View>
        </View>
    )

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Carreras</Text>

            <FlatList
            data={races}
            keyExtractor={elem => elem.name}
            renderItem={renderItem}

            />
        </View>
    )
};
