import { StyleSheet } from "react-native";

export const rankingTeamsStyles = StyleSheet.create({
    card: {
        backgroundColor: '#333',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    position:{ 
        color: '#fff',
        fontSize: 20,
        backgroundColor: '#3a3a4d',
        padding: 5,
        borderRadius: 100,
        alignSelf: 'center',
        marginRight: 10,
    },  
    imageContainer:{
        justifyContent:'flex-start',
        width: 60,
        alignItems: 'center'
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'center'
    },
    name: {
        fontSize: 20,
        color: '#fff',
        width: 150,
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
        marginLeft: 'auto',
        color: '#fff',
        fontSize: 18
    }
})