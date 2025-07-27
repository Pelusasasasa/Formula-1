import { RankingDriver } from '@/core/rankings/interface/RankingDriver'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

interface Props {
    driver: RankingDriver,
    lider: RankingDriver
}

const DriverCard = ({driver, lider}: Props ) => {

    let position = '';

    if(driver.position === 1){
        position = 'bg-yellow-400';
    }else if(driver.position === 2){
        position = 'bg-gray-400'
    }else if(driver.position === 3){
        position = 'bg-orange-400'
    }else{
        position = 'bg-green-400'
    };
  return (
    <View className='gap-5  flex-row'>
        <View className={`rounded-full border  border-gray-200 items-center w-8 h-8 justify-center ${position}`}>
            <Text className='text-white'>{driver.position}</Text>
        </View>
        <View>
            <Image src={driver.driver.image} width={40} height={40} className=' rounded-full'/>
        </View>

        <View>
            <Text>{driver.driver.name}</Text>
            <View className='flex-row gap-2 items-center'>
                <Text className='rounded-lg border border-gray-200 p-1'>#{driver.driver.number}</Text>
                <Text className='text-gray-400'>{driver.driver.abbr}</Text>
            </View>
            
            <View className='flex-row gap-5 mt-2'>
                <Image src={driver.team.logo} width={15} height={15}/>
                <Text className='text-xs text-gray-500'>{driver.team.name}</Text>
            </View>
        </View>

        <View className='ml-auto'>
            <Text className='text-2xl font-bold'>{driver.points}</Text>
            <Text className=' font-extralight'>Puntos</Text>
            {
                driver.wins !== 0 && (
                    <View className='flex-row gap-2 items-center'>
                        <Ionicons name='medal-outline' color={'orange'} className='text-yellow-300'/>
                        <Text>{driver.wins}</Text>
                    </View>
                )
            }
            {
                driver.position !== 1 && (
                    <Text className='text-red-600'>-{driver.behind}</Text>
                )
            }
        </View>
    </View>
  )
}

export default DriverCard