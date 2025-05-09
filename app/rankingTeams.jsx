import { View, Text, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'
import { rankingPilotsStyles } from '../styles/rankingsPilots'
import { Image } from 'expo-image'
import { rankingTeamsStyles } from '../styles/rankingsTeams'

const data = [
    {
        position: 1,
        team: {
            id: 4,
            name: "Mercedes-AMG Petronas",
            image: "https://media.api-sports.io/formula-1/teams/5.png"
        },
        points: 739
    },
    {
        position: 2,
        team: {
            id: 3,
            name: "Scuderia Ferrari",
            image: "https://media.api-sports.io/formula-1/teams/3.png"
        },
        points: 504
    },
]

export default function RankingTeams() {

    const renderItem = ({item}) => (
        <View style={rankingTeamsStyles.card}>
            <Text style={rankingTeamsStyles.position}>{item.position}</Text>
            <View style={rankingTeamsStyles.imageContainer}>
                <Image contentFit='contain' style={rankingTeamsStyles.image} source={item.team.image}/>
            </View>
            <Text style={rankingTeamsStyles.name}>{item.team.name}</Text>
            <Text style={rankingTeamsStyles.points}>{item.points} pts</Text>
        </View>
    )

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Clasificacion de equipos</Text>

      <FlatList
        data={data}
        keyExtractor={elem => elem.position}
        renderItem={renderItem}
      />
    </View>
  )
}

