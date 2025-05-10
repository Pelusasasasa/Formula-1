import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { View, Text } from 'react-native'


export default function PilotCard({item}) {
  return (
        <Pressable onPress={() => router.push(`/driver/${item.id}`)} style={styles.pilotoCard}>
            <Image source={item.image} style={styles.pilotoImage}/>
            <Text style={styles.pilotoCardName}>{item.name}</Text>
            <View style={styles.nacionalidadContainer}>
                <Ionicons name='flag-outline' size={15} color='#fff'/>
                <Text style={styles.nacionalidadText}>{item.nacionalidad}</Text>
            </View>
            <Text style={styles.number}>#{item.numero}</Text>
        </Pressable>
  )
};


const styles = StyleSheet.create({
    pilotoCard:{
        marginVertical: 20,
        width: '48%',
        height: '100%',
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pilotoCardName: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    nacionalidadContainer: {
        flexDirection: 'row',
        gap: '10',
        paddingTop: 10,
    },
    nacionalidadText:{
        color: '#fff',
        
        size: 20
    },
    number: {
        borderRadius: 12,
        color: '#fff',
        backgroundColor: 'red',
        marginTop: 20,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    pilotoImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 1
    }
});