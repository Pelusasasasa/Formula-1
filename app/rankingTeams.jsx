import { View, Text, FlatList } from 'react-native'
import { globalStyles } from '../styles/global'
import { rankingPilotsStyles } from '../styles/rankingsPilots'
import { Image } from 'expo-image'
import { rankingTeamsStyles } from '../styles/rankingsTeams'
import { useEffect } from 'react'
import { useRankigsTeam } from '../hooks/useRankingsTeam'
import CargandoPantalla from '../components/CargandoPantalla'


export default function RankingTeams() {

    const { startGetRankigsTeam, rankings, isSaving} = useRankigsTeam();

    useEffect(() => {
        startGetRankigsTeam();
    }, []);

    const renderItem = ({item}) => (
        <View style={rankingTeamsStyles.card}>
            <Text style={rankingTeamsStyles.position}>{item.position}</Text>
            <View style={rankingTeamsStyles.imageContainer}>
                <Image contentFit='contain' style={rankingTeamsStyles.image} source={item.team.logo}/>
            </View>
            <Text style={rankingTeamsStyles.name}>{item.team.name}</Text>
            <Text style={rankingTeamsStyles.points}>{item.points} pts</Text>
        </View>
    )

    if(isSaving){
        return (
            <CargandoPantalla/>
        )
    }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Clasificacion de equipos</Text>

      <FlatList
        data={rankings}
        keyExtractor={elem => elem.position}
        renderItem={renderItem}
      />
    </View>
  )
}

