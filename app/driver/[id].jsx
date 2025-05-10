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
      <View style={driverStyle.nationalityContainer}>
        <Ionicons size={20} style={driverStyle.iconNationality} name='flag-outline' />
        <Text style={driverStyle.nationality}>{data.nationality}</Text>
      </View>
      <Text style={driverStyle.number}>#{data.number}</Text>
      <View style={driverStyle.informacionContainer}>
        <Text style={globalStyles.title}>Informacion Presonal</Text>

        <View style={driverStyle.cumple}>
            <View>
              <Text style={[globalStyles.text20, globalStyles.textGray]}>Fecha de Nacimiento</Text>
              <View style={driverStyle.infoContainer}>
                <Ionicons name='calendar-outline' size={25} color='#e10600' />
                <Text style={[globalStyles.text20, globalStyles.textWhite]}>{data.birthdate}</Text>
              </View>
            </View>

            <View>
              <Text style={[globalStyles.text20, globalStyles.textGray]}>Edad</Text>
              <Text style={[globalStyles.text20, globalStyles.textWhite, globalStyles.textCenter]}>{data.age}</Text>
            </View>
        </View>

        <View >
            <Text style={[globalStyles.text20, globalStyles.textGray]}>Equipo Actual</Text>
            <View style={driverStyle.team}>
              <Ionicons name='people-outline' size={25} color='#e10600' />
              <Text style={[globalStyles.text20, globalStyles.textWhite]}>{data.team.name}</Text>
            </View>
        </View>
        <View>
            <Text style={[globalStyles.text20, globalStyles.textGray]}>Campeonatos</Text>
            <View  style={driverStyle.campeonatos}>
              <Ionicons name='trophy-outline' size={25} color='#e10600' />
              <Text style={[globalStyles.text20, globalStyles.textWhite]}>{data.world_championships}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}