import { MenuRoutes } from '@/constants/Routes';
import MenuCard from '@/presentation/menu/components/MenuCard';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View } from 'react-native';


const HomeScreen = () => {
  return (
    <View className='flex-1 min-h-screen mt-20'>
      <View className='bg-gradient-to-r from-red-600 to-red-700 bg-red-600 py-5 w-full text-white flex-row justify-center gap-16'>
        <View>
            <ThemedText className='text-white text-2xl'>Formula 1</ThemedText>
            <ThemedText className='text-white/80'>Temporada 2024</ThemedText>
        </View>

        <View>
            <Ionicons name='settings-outline' size={25} color={'white'} className='bg-white/60 text-white rounded-full p-2' />
        </View>
      </View>

      <View className='  mx-auto px-4 -m-4 mb-6'>
        <View className='rounded-lg border bg-white shadow-lg  '>
          <View className='p-4'>
            <View className='grid grid-cols-3 flex-row gap-5 text-center'>
              <View>
                <ThemedText className='text-red-600 text-2xl font-semibold text-center'>23</ThemedText>
                <ThemedText className='text-xl text-gray-600'>Carreras</ThemedText>
              </View>

              <View>
                <ThemedText className='text-red-600 text-2xl font-semibold text-center'>20</ThemedText>
                <ThemedText className='text-xl text-gray-600'>Pilotos</ThemedText>
              </View>

              <View>
                <ThemedText className='text-red-600 text-2xl font-semibold text-center'>10</ThemedText>
                <ThemedText className='text-xl text-gray-600'>Equipos</ThemedText>
              </View>

            </View>
          </View>
        </View>
      </View>


      <FlatList
        data={MenuRoutes}
        className='gap-5 mb-10'
        keyExtractor={elem => elem.titulo}
        renderItem={({item} )=> <MenuCard titulo={item.titulo} descripcion={item.descripcion} icon={item.icon} name={item.name}/>}
       />

    </View>
  )
}

export default HomeScreen