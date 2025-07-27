import { rankingsDrivers } from '@/core/data/rankings-drivers';
import { RankingDriver } from '@/core/rankings/interface/RankingDriver';
import DriverCard from '@/presentation/rankings/components/DriverCard';
import TituloRanking from '@/presentation/rankings/components/TituloRanking';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
const PilotoScreen = () => {

    const [lider] = useState<RankingDriver>(rankingsDrivers.find(driver  => driver?.position === 1)!);

  return (

    <View className='flex-1 min-h-screen mt-10'>
      <View className='bg-gradient-to-r py-5 w-full text-white items-center justify-center gap-5'>
        
      {/* Resumen */}
      <TituloRanking lider={lider} type='driver' />
      
      <View className='justify-start w-full ml-5'>
        <Text className='text-2xl'>Clasificacion Actual</Text>
      </View>
      {/* Tabla */}
      
      <FlatList
        data={rankingsDrivers}
        className='mb-52'
        renderItem={({item}) => <DriverCard driver={item} lider={lider} />}
      />

      </View>
    </View>
  )
}

export default PilotoScreen