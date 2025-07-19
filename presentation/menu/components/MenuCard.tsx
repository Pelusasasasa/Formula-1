import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';


interface Props extends PressableProps {
    titulo: string;
    descripcion: string;
    icon?: keyof typeof Ionicons.glyphMap,
}

const MenuCard = ( {titulo, descripcion, icon}: Props) => {
  return (
      <View className='mx-auto'>
        <Pressable className='border border-gray-300 flex-row items-center gap-16 px-3 py-2'>
            <Ionicons name={icon} size={20} color='red' className='bg-red-300/40 p-2 rounded-full'/>

            <View>
                <ThemedText className='text-xl font-semibold'>{titulo}</ThemedText>
                <ThemedText className='text-gray-500'>{descripcion}</ThemedText>
            </View>

            <Ionicons name='chevron-forward-outline' className='text-gray-200' color={'gray'} size={20}/>
        </Pressable>
    </View>
  )
}

export default MenuCard