import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/global";

const pantallas = [
    {
        text: 'Pilotos',
        icon: 'people-outline',
        direccion: 'pilots'
    },
    {
        text: 'Equipos',
        icon: 'flag-outline',
        direccion: 'teams'
    }, 
    {
        text: 'Carreras',
        icon: 'calendar-clear-outline',
        direccion: 'racings'
    },
    {
        text: 'Competiciones',
        icon: 'trophy-outline'
    },
];

export default function Home(){

    const renderItem = ({item}) => (
        <Pressable style={styles.pantallacardStyle} onPress={() => router.push(`/${item.direccion}`)}>
            <Ionicons name={item.icon} style={styles.pantallaCardIconStyle} size={40} color='red'/>
            <Text style={styles.pantallaCardTextStyle}>{item.text}</Text>
        </Pressable>
    )

    return (
        <View style={globalStyles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={20} color="#fff" style={ styles.icon } />
                <TextInput placeholderTextColor='#999' placeholder="Buscar Pilotos, equipos..." style={styles.input}/>
            </View>

            <View>
                <FlatList
                    data={pantallas}
                    keyExtractor={elem => elem.text}
                    renderItem={renderItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }} // opcional
                    contentContainerStyle={{ padding: 16 }}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#25292e',
        borderRadius: 8,
    },
    icon: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
    },  
    input: {
        height: 40,
        width: 300,
        color: '#fff',
        paddingLeft: 40, 
    },
    pantallacardStyle: {
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 16,
        width: '48%'
    },
    pantallaCardIconStyle: {
        marginBottom: 10,
    },
    pantallaCardTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
});

