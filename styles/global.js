import { StyleSheet } from "react-native";

export const globalStyles  = StyleSheet.create({
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
    text20: {
        fontSize: 20,
    },
    textWhite: {
        color: '#ffff'
    },
    textGray: {
        color: '#9ca3af'
    },  
    textCenter: {
        textAlign: 'center'
    },  




    racingContainer:{
        width: '100%',
        borderRadius: 12,
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