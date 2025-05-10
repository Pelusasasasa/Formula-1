import { StyleSheet } from "react-native";

export const rankingPilotsStyles = StyleSheet.create({
    card: {
        backgroundColor: '#333',
        padding: 10,
        marginBottom: 7,
        borderRadius: 15,
        flexDirection: 'row',
        // justifyContent: 'space-between'
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
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    name: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 10,
        fontStyle: 'italic'
    },
    teamName: {
        fontSize: 12,
        marginLeft: 10,
        color: '#d1d5db'
    },  
    points: {
        marginLeft: 'auto',
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18
    }
})