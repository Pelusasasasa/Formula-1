import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';


interface Props extends PressableProps {
    titulo: string;
    descripcion: string;
    icon?: keyof typeof Ionicons.glyphMap,
    name?: string;
};

const MenuCard = ( {titulo, descripcion, icon, name}: Props) => {
  const [aux,routerName] = name?.split('/')
  const press = () => {
    name && router.push(routerName as Href)
  }
  return (
      <View className='mx-auto mb-5'>
        <Pressable className='border border-gray-300 flex-row items-center gap-5 px-3 py-2 w-[90vw]' onPress={press}>
            <Ionicons name={icon} size={20} color='red' className='bg-red-300/40 p-2 rounded-full'/>

            <View>
                <ThemedText className='text-lg font-semibold w-52'>{titulo}</ThemedText>
                <ThemedText className='text-gray-500 w-56'>{descripcion}</ThemedText>
            </View>

            <Ionicons name='chevron-forward-outline' className='text-gray-200' color={'gray'} size={20}/>
        </Pressable>
    </View>
  )
}

export default MenuCard