import { rankingsTeams } from '@/core/data/rankings-teams'
import { RankingTeamInterface } from '@/core/rankings/interface/RankingTeam'
import TeamCard from '@/presentation/rankings/components/TeamCard'
import TituloRanking from '@/presentation/rankings/components/TituloRanking'
import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const RankingTeamScreen = () => {
    const [lider] = useState<RankingTeamInterface>(rankingsTeams.find(team => team.position === 1)!);
  return (
    <View className='flex-1 min-h-screen mt-10'>
        <View className='py-5 w-full text-white items-center justify-center gap-5'>
                
            <TituloRanking teamLider={lider} type='team' />

            <View className='justify-start w-full ml-5'>
                <Text className='text-2xl'>Clasificacion Actual</Text>
            </View>

            <FlatList
                data={rankingsTeams} 
                className='mb-12'
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <TeamCard team={item} lider={lider}/> }
            />
        </View>
    </View>
  )
}

export default RankingTeamScreen