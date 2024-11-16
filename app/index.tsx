import { View, Image, Share, Alert, Pressable } from 'react-native';
import { Background } from '@/components/Background';
import { ContainerCards } from '@/components/ContainerCards';
import { CustomText } from '@/components/Text';
import { Box } from '@/components/Box';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { FloatingButton } from '@/components/FloatingButton';
import { Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
    const { push } = useRouter();
    const onShare = React.useCallback(async (message: string) => {
        try {
            const result = await Share.share({
                message,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    }, []);
    return (
        <Background>
            <View style={{ height }}>
                <View
                    style={{
                        marginTop: 80,
                        paddingBottom: 32,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CustomText
                        type='extra-large'
                        text='Bem-vindo, Paulo'
                        style={{ color: Colors.textSecondary }}
                    />
                </View>

                <ContainerCards>
                    <CustomText
                        type='extra-large'
                        text='Minhas Análises'
                        style={{ color: Colors.text }}
                    />
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: Colors.background,
                            marginVertical: 12,
                            borderRadius: 2,
                        }}
                        id='divider'
                    />
                    <GestureHandlerRootView>
                        <FlatList
                            data={[{ title: 'new item' }]}
                            ItemSeparatorComponent={() => (
                                <View style={{ marginVertical: 12 }} />
                            )}
                            contentContainerStyle={{ paddingBottom: 300 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ index, item }) => (
                                <Box
                                    key={index}
                                    extra={
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                width: '100%',
                                            }}
                                        >
                                            <Ionicons
                                                name='heart'
                                                //    name='heart-outline'
                                                size={20}
                                                color='white'
                                            />
                                            <Pressable
                                                onPress={() =>
                                                    onShare(item.title)
                                                }
                                            >
                                                <Ionicons
                                                    name='share-social-outline'
                                                    size={20}
                                                    color='white'
                                                />
                                            </Pressable>
                                        </View>
                                    }
                                >
                                    <Image
                                        style={{ borderRadius: 8 }}
                                        height={160}
                                        source={{
                                            uri: 'https://s3-alpha-sig.figma.com/img/3084/0d58/6dcca4a6d1ad1037e1f21dce7300c0ca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C39E2yWr2uLUXCY-P~ZtJbdlUjbZasoDpIJ0ayzkfQmCv2~td4dVZgY7D~apCvVvle4R1fhwtWSKqXWNEtz5u33rqxL4E76LRAAb46gd~Iuu-98--jZ6JmIYia2EdEkayefdq8pdnarroiSLp1Eg2LvKLYCUOE34TVxVyxPfZxmpmC1R3MxXhoSI3iNIjxPJUSJGWBqoEEVVkk2B6DRk2uwQgSza-h184Fywe0FCzVQHvE5ENnDqANXZITZk-yi-THxUu6tNeaswEOPATHJB1l9Wl97LoyXhN9QygrCgxvxp7iHZImAWEo1deiUERquTnY08A5~vkOeNXnpBAFy2kQ__',
                                        }}
                                    />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: 8,
                                        }}
                                    >
                                        <CustomText
                                            type='medium'
                                            text='Análise 1 | 20-03-24'
                                        />
                                        <CustomText
                                            type='medium'
                                            text='Ver detalhes'
                                            style={{
                                                textDecorationLine: 'underline',
                                            }}
                                        />
                                    </View>
                                </Box>
                            )}
                        />
                    </GestureHandlerRootView>
                </ContainerCards>
                <FloatingButton onTap={() => push('/new-analysis')} />
            </View>
        </Background>
    );
}
