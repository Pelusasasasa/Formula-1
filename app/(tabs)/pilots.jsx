import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const pilotos = [
    {
        name: 'Max Verstappen',
        nacionalidad: 'Paises Bajos',
        numero: 1
    },
]

export default function Pilots(){

    const renderItem = ({item}) => (
        <View style={styles.pilotoCard}>
            <Text style={styles.pilotoCardName}>{item.name}</Text>
            <View style={styles.nacionalidadContainer}>
                <Ionicons name='flag-outline' size={15} color='#fff'/>
                <Text style={styles.nacionalidadText}>{item.nacionalidad}</Text>
            </View>
            <Text style={styles.number}>#{item.numero}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pilotos de F1</Text>
            <FlatList
                data={pilotos}
                keyExtractor={elem => elem.numero}
                renderItem={renderItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: '#15151e'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginTop: 20,
    },
    pilotoCard:{
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    pilotoCardName: {
        fontSize: 20,
        color: '#fff'
    },
    nacionalidadContainer: {
        flexDirection: 'row',
        gap: '10',
        marginTop: 7
    },
    nacionalidadText:{
        color: '#fff',
        size: 20
    },
    number: {
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        color: '#fff',
        backgroundColor: 'red',
        marginBottom: 10,
    }
});