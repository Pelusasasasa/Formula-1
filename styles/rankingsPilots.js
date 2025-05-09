import { StyleSheet } from "react-native";

export const rankingPilotsStyles = StyleSheet.create({
    card: {
        backgroundColor: '#333',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    position:{ 
        color: '#fff',
        fontSize: 20,
        backgroundColor: '#3a3a4d',
        padding: 5,
        borderRadius: 100,
        alignSelf: 'center'
    },  
    image:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        color: '#fff',
        fontStyle: 'italic'
    },
    teamName: {
        fontSize: 12,
        color: '#d1d5db'
    },  
    points: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'center',
        color: '#fff'
    }
})