import { StyleSheet, FlatList, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { racingStyles } from "../styles/rancing";

const data = [
    {
        name: 'Gran Premio de Bahrein',
        circuitName: 'circuito de Bahrein',
        fecha: '2025-03-04T15:00:00.000Z',
        status: "Completado"
    }
]

export default function Racings(){

    const renderItem = ({item}) => (
        <View style={racingStyles.racingContainer}>
            <View style={racingStyles.racingTitle}>
                <Text style={racingStyles.racingName}>{item.name}</Text>
                <Text style={racingStyles.racingStatus}>{item.status}</Text>
            </View>
            <View style={racingStyles.infoRacing}>
                <Ionicons size={22} color='#fff' name="location-outline" />
                <Text style={racingStyles.infoTextRacing}>{item.circuitName}</Text>
            </View>
            <View style={racingStyles.infoRacing}>
                <Ionicons size={22} color='#fff' name="calendar-clear-outline" />
                <Text style={racingStyles.infoTextRacing}>{item.fecha.slice(0,10).split('-', 3).reverse().join('/')}</Text>
            </View>
            <View style={racingStyles.infoRacing}>
                <Ionicons size={22} color='#fff' name="time-outline" />
                <Text style={racingStyles.infoTextRacing}>{item.fecha.slice(11,16)}</Text>
            </View>
        </View>
    )

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Carreras</Text>

            <FlatList
            data={data}
            keyExtractor={elem => elem.name}
            renderItem={renderItem}

            />
        </View>
    )
};


const styles = StyleSheet.create({

});