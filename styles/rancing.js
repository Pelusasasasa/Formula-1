import { StyleSheet } from "react-native";

export const racingStyles  = StyleSheet.create({

    racingContainer:{
        width: '100%',
        borderRadius: 12,
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#333',
        paddingVertical: 10,
    },
    racingTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 5
    },
    racingName: {
        fontSize: 20,
        color: '#FFF'
    },
    racingStatus: {
        backgroundColor: 'green',
        borderRadius: 12,
        paddingHorizontal: 5,
        textAlign:'center',
        paddingVertical: '3',
        color: '#fff'
    },
    infoRacing: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    infoTextRacing:{
        color: '#FFF',
        marginLeft: 15,
        fontSize: 18
    }
})