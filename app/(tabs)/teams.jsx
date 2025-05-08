import { FlatList, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

const data = [
    {
        name: 'Red Bull Racing',
        image: 'https://media.api-sports.io/formula-1/teams/1.png',
        nationalidad: 'Austria',
        director: 'director'
    },
    {
        name: 'Mercedes-AMG',
        image: 'https://media.api-sports.io/formula-1/teams/2.png',
        nationalidad: 'Alemania',
        director: 'Toto Wolf'
    },
]

export default function Teams(){

        const renderItem = ({item}) => (
        <View style={styles.teamCard}>
            <Image contentFit="contain" source={item.image} style={styles.teamImage}/>
            <View style={styles.infoContainer}>
                <Text style={styles.teamCardName}>{item.name}</Text>
                <View style={styles.nacionalidadContainer}>
                    <Ionicons name='flag-outline' size={15} color='#fff'/>
                    <Text style={styles.nacionalidadText}>{item.nationalidad}</Text>
                </View>
                <View style={styles.directorContainer}>
                    <Ionicons name='people-outline' size={15} color='#fff'/>
                    <Text style={styles.director}>{item.director}</Text>
                </View>
            </View>
        </View>
    )

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Equipos de F1</Text>
            <FlatList
                data={data}
                keyExtractor={data.name}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 16 }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    teamCard:{
        flexDirection: 'row',
        width: '100%',
        marginBottom: 16,
        backgroundColor: '#333',
        padding: 12,
        borderRadius: 12
    },
    infoContainer: {
        justifyContent:'space-between'
    },
    teamCardName:{
        fontSize: 20,
        color: '#fff',
        marginLeft: 10
    },
    nacionalidadContainer: {
        marginLeft: 10,
        flexDirection: 'row',
        gap: 10
    },
    nacionalidadText: {
        color: '#fff'
    },  
    teamImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#fff'
    },
    directorContainer:{
        paddingLeft: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    director: {
        color: '#fff',
    }
});
