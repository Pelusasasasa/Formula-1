import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/theme/hooks/useColorScheme';

import { MenuRoutes } from '@/constants/Routes';
import '../global.css';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTitleStyle: {
          color: 'white'
        }
        
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        
        {MenuRoutes.map(({titulo, name}) => (
          <Stack.Screen key={titulo} name={name} options={{ title: titulo, headerShown: true }}/>
        ))}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
