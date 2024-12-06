import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { Image, Platform, Share } from 'react-native';
import { Colors } from '@/constants/Colors';
import {
    Montserrat_500Medium,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { replace } = useRouter();
    const [loaded] = useFonts({
        mont400: Montserrat_500Medium,
        mont700: Montserrat_700Bold,
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
            <Stack initialRouteName='login' screenOptions={{
                headerBackButtonDisplayMode: 'minimal'
            }}>
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
                            backgroundColor: Colors.backgroundSecondary,
                        },
                        headerLeft:
                            Platform.OS === 'ios'
                                ? () => (
                                    <Ionicons
                                        name='settings-outline'
                                        size={28}
                                        color='#566F52B2'
                                        onPress={() => replace('/login')}
                                    />
                                )
                                : undefined,
                        headerTitle: () => (
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('@/assets/images/veridi.png')}
                            />
                        ),
                        headerRight: () => (
                            <Ionicons
                                name='person-circle-outline'
                                size={28}
                                color='#566F52B2'
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name='new-analysis'
                    options={{
                        title: '',
                        headerTintColor: Colors.green,
                        headerStyle: {
                            backgroundColor: Colors.backgroundSecondary,
                        },
                        headerTitle: () => (
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('@/assets/images/veridi.png')}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name='report'
                    options={{
                        title: '',
                        headerTintColor: Colors.green,
                        headerStyle: {
                            backgroundColor: Colors.backgroundSecondary,
                        },
                        headerTitle: () => (
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('@/assets/images/veridi.png')}
                            />
                        ),
                    }}
                />
                <Stack.Screen name='+not-found' />
            </Stack>
        </ThemeProvider>
    );
}
