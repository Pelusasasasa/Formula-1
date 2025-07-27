import { rankingsDrivers } from '@/core/data/rankings-drivers';
import { rankingsTeams } from '@/core/data/rankings-teams';
import { RankingDriver } from '@/core/rankings/interface/RankingDriver';
import { RankingTeamInterface } from '@/core/rankings/interface/RankingTeam';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    lider?: RankingDriver;
    teamLider?: RankingTeamInterface;
    type: string;
}

const TituloRanking = ({ lider, type, teamLider }: Props) => {
  return (
    
    <View className='border border-gray-200 rounded-lg p-5 flex-row gap-5'>
        
        <View className='justify-center items-center'>
          <Text className='text-red-600 font-bold text-2xl'>{type === 'team' ? rankingsTeams.length  : rankingsDrivers.length}</Text>
          <Text className='text-gray-500 text-xs'>{type === 'team' ? 'Equipos' : 'Pilotos'}</Text>
        </View>

        <View className='justify-center items-center'>
          <Text className='text-red-600 font-bold text-2xl'>{type === 'team' ? teamLider?.points : lider?.points}</Text>
          <Text className='text-gray-500 text-xs'>Puntos Lider</Text>
        </View>
        
        <View className='justify-center items-center'>
          <Text className={`text-red-600 font-bold ${type === 'team' ? 'text-sm' : 'text-2xl'}`}>{type === 'team' ? teamLider?.team.name : lider?.wins}</Text>
          <Text className='text-gray-500 text-xs'>{type === 'team' ? 'Lider' : 'Victorias Total'}</Text>
        </View>
      
    </View>
  )
}

export default TituloRanking