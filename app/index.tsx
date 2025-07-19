import { ThemedText } from '@/presentation/theme/components/ThemedText'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  return (
    <View className='flex-1 min-h-screen items-center mt-20'>
      <View className='bg-gradient-to-r from-red-600 to-red-700 text-white'>
        <View>
            <ThemedText>Formula 1</ThemedText>
            <ThemedText>Temporada 2024</ThemedText>
        </View>

        <View>
            <Ionicons name='c'/>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen