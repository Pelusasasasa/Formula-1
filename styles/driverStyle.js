import { StyleSheet } from "react-native";

export const driverStyle = StyleSheet.create({
    image:{
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'red'
    },
    nationalityContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    iconNationality: {
        color: '#d1d5db'
    },
    nationality: {
        color: '#d1d5db',
        fontSize: 20
    },
    number:{
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingVertical: 3,
        fontSize: 20,
        color: 'white',
        marginVertical: 10,
        borderRadius: 50
    },
    informacionContainer: {
        backgroundColor: '#1e1e2d',
        width: '100%',
        borderRadius: 25,
        paddingHorizontal: 20
    },
    infoContainer: {
        flexDirection: 'row',
        gap: 10
    },
    cumple: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    team: {
        flexDirection: 'row',
        gap: 15,
        paddingVertical: 10
    },
    campeonatos: {
        flexDirection: 'row',
        gap: 15,
        paddingVertical: 10
    }
    
})