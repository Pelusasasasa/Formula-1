import { View, Text, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'
import { Image } from 'expo-image'
import { rankingPilotsStyles } from '../styles/rankingsPilots'
import { useEffect } from 'react'
import { useRankingsPilots } from '../hooks/useRankingsPilots'
import CargandoPantalla from '../components/CargandoPantalla'


const data = [
  {
    "behind": null,
    "driver": {"abbr": "VER", "id": 25, "image": "https://media.api-sports.io/formula-1/drivers/25.png", "name": "Max Verstappen", "number": 1},
    "points": 575,
    "position": 1,
    "season": 2023,
    "team": {"id": 1, "logo": "https://media.api-sports.io/formula-1/teams/1.png", "name": "Red Bull Racing"},
    "wins": 19
  }
]

export default function RankingPilots() {

  const { rankings, isSaving, startGetRankingsPilot } = useRankingsPilots();

  useEffect(() => {
    startGetRankingsPilot();
  }, []);

    const renderItem = ({item}) => (
        
        <View style={rankingPilotsStyles.card}>
            <Text style={[
              rankingPilotsStyles.position,
              item.position === 1 && {backgroundColor: '#eab308'},
              item.position === 2 && {backgroundColor: '#d1d5db'},
              item.position === 3 && {backgroundColor: '#7a7d81'}
            ]}>{item.position}</Text>
            <Image style={rankingPilotsStyles.image} source={item.driver.image}/>
            <View>
                <Text style={rankingPilotsStyles.name}>{item.driver.name}</Text>
                <Text style={rankingPilotsStyles.teamName}>{item.team.name}</Text>
            </View>
            <Text style={rankingPilotsStyles.points}>{item.points} pts</Text>
        </View>
    );

    if(isSaving){
      return (
        <CargandoPantalla/>
      )
    }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Clasificaciones de Pilotos</Text>

      <FlatList
        data={rankings}
        keyExtractor={elem => elem.driver.id}
        renderItem={renderItem}
      />
    </View>
  )
}