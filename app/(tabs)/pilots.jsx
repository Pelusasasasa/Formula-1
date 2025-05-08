import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

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

    const renderItem = ({item}) => (
        <View style={styles.pilotoCard}>
            <Image source={item.image} style={styles.pilotoImage}/>
            <Text style={styles.pilotoCardName}>{item.name}</Text>
            <View style={styles.nacionalidadContainer}>
                <Ionicons name='flag-outline' size={15} color='#fff'/>
                <Text style={styles.nacionalidadText}>{item.nacionalidad}</Text>
            </View>
            <Text style={styles.number}>#{item.numero}</Text>
        </View>
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

const styles = StyleSheet.create({
    pilotoCard:{
        marginVertical: 20,
        width: '48%',
        height: '100%',
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pilotoCardName: {
        fontSize: 20,
        color: '#fff'
    },
    nacionalidadContainer: {
        flexDirection: 'row',
        gap: '10',
        paddingTop: 10,
    },
    nacionalidadText:{
        color: '#fff',
        
        size: 20
    },
    number: {
        borderRadius: 12,
        color: '#fff',
        backgroundColor: 'red',
        marginTop: 20,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    pilotoImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 1
    }
});