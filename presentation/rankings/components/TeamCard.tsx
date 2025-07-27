import { RankingTeamInterface } from '@/core/rankings/interface/RankingTeam';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface Props {
    team: RankingTeamInterface;
    lider: RankingTeamInterface;
}

const TeamCard = ({team, lider}: Props) => {
    
    let position = '';

    if(team.position === 1){
        position = 'bg-yellow-400';
    }else if(team.position === 2){
        position = 'bg-gray-400'
    }else if(team.position === 3){
        position = 'bg-orange-400'
    }else{
        position = 'bg-green-400'
    };

  return (
    <View className='gap-5 flex-row '>
      <View className={`rounded-full mx-5 border border-gray-200 items-center w-8 h-8 justify-center ${position}`}>
        <Text className='text-white'>{team.position}</Text>
      </View>

      <View>
        <Image src={team.team.logo} width={70} height={40} className='object-cover' />
      </View>

      <View>
        <Text>{team.team.name}</Text>
        { team.position !== 1 && <Text className='text-gray-400 text-xs'>{ team.points - lider.points } pts del lider</Text>}
      </View>

      <View className='ml-auto'>
        <Text className='text-2xl font-bold'>{team.points}</Text>
        <Text className='text-gray-400'>Puntos</Text>
      </View>
    </View>
  )
}

export default TeamCard