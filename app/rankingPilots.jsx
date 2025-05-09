import { View, Text, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'
import { Image } from 'expo-image'
import { rankingPilotsStyles } from '../styles/rankingsPilots'


const data = [
    {
        position: 1,
        driver: {
            id: 20,
            name: "Lewis Hamilton",
            image: "https://media.api-sports.io/formula-1/drivers/20.png"
        },
        team: {
            name: 'Mercedes-AMG Petronas'
        },
        points: 443
    }
]

export default function RankingPilots() {

    const renderItem = ({item}) => (
        
        <View style={rankingPilotsStyles.card}>
            <Text style={rankingPilotsStyles.position}>{item.position}</Text>
            <Image style={rankingPilotsStyles.image} source={item.driver.image}/>
            <View>
                <Text style={rankingPilotsStyles.name}>{item.driver.name}</Text>
                <Text style={rankingPilotsStyles.teamName}>{item.team.name}</Text>
            </View>
            <Text style={rankingPilotsStyles.points}>{item.points} pts</Text>
        </View>
    );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Clasificaciones de Pilotos</Text>

      <FlatList
        data={data}
        keyExtractor={elem => elem.driver.id}
        renderItem={renderItem}
      />
    </View>
  )
}