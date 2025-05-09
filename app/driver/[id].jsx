import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import { driverStyle } from '../../styles/driverStyle';

export default function Driver() {
    const { id } = useLocalSearchParams();
    const data = {
        id: 1,
        name: "Max Verstappen",
        nationality: "Países Bajos",
        number: 1,
        image: "https://media.api-sports.io/formula-1/drivers/88.png",
        birthdate: "1997-09-30",
        age: 26,
        world_championships: 3,
        team: {
          id: 1,
          name: "Red Bull Racing",
        },
      }
  return (
    <View style={[
        globalStyles.container,
        {alignItems: 'center', paddingTop: 20}
    ]}>
      <Image style={driverStyle.image} source={data.image}/>
      <Text style={globalStyles.title}>{data.name}</Text>
      <View>
        <Ionicons name='flag-outline' />
        <Text>{data.nationality}</Text>
      </View>
      <Text>{data.numbre}</Text>
      <View>
        <Text>Informacion Presonal</Text>

        <View>
            <Text>{data.birthdate}</Text>
            <Text>{data.age}</Text>
        </View>
        <View>
            <Text>Equipo</Text>
            <Text>{data.team.name}</Text>
        </View>
        <View>
            <Text>Campeonatos</Text>
            <Text>{data.world_championships}</Text>
        </View>
      </View>
    </View>
  )
}