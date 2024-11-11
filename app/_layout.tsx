import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import Icon from '@/assets/images/veridi.png'
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

 
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={DefaultTheme}>
            <Stack initialRouteName='login'>
                <Stack.Screen
                    name='login'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='index'
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#ECECEC',
                        },
                        headerLeft: () => (
                            <Ionicons
                                name='settings-outline'
                                size={28}
                                color='#566F52B2'
                            />
                        ),
                        headerTitle: () =>
                            <Image style={{ width: 50, height: 50 }} source={require('@/assets/images/veridi.png')} />,
                        headerRight: () => (
                            <Ionicons
                                name='person-circle-outline'
                                size={28}
                                color='#566F52B2'
                            />
                        ),
                    }}
                />
                <Stack.Screen name='+not-found' />
            </Stack>
        </ThemeProvider >
    );
}
