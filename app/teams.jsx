import { FlatList, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useTeamsStore } from "../hooks";
import { useEffect } from "react";


export default function Teams(){

        const {teams, startGetTeams} = useTeamsStore();

        useEffect(() => {
            startGetTeams()
        }, [])

        const renderItem = ({item}) => (
        <View style={styles.teamCard}>
            <Image contentFit="contain" source={item.logo} style={styles.teamImage}/>
            <View style={styles.infoContainer}>
                <Text style={styles.teamCardName}>{item.name}</Text>
                <View style={styles.nacionalidadContainer}>
                    <Ionicons name='flag-outline' size={15} color='#fff'/>
                    <Text ellipsizeMode="tail" style={styles.nacionalidadText}>{item.base}</Text>
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
                data={teams}
                keyExtractor={teams.name}
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
        width: 200,
        marginLeft: 10
    },
    nacionalidadContainer: {
        marginLeft: 10,
        flexDirection: 'row',
        gap: 10,
        width: 200
    },
    nacionalidadText: {
        color: '#fff',
        flexWrap: 'wrap'
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
        width: 200,
        alignItems: 'center'
    },
    director: {
        color: '#fff',
        flexWrap: 'wrap'
    }
});
