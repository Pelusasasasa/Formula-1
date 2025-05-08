import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function NavBar(){
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                    <Image contentFit="contain" source={require('../assets/logo.png')} style={styles.logo}/>
                </View>
                <Text style={styles.title}>F1 Mobile</Text>
            </View>

            <Ionicons name="menu-outline" style={styles.icon} size={35} />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#e10600'
    },
    logoContainer: {
        flexDirection: 'row'
    },
    logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginLeft: 10
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#FFF'
    },
    icon: {
        marginRight: 20,
        marginTop: 10,
        color: '#fff'
    }
})