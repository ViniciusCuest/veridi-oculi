import { View,  Image } from 'react-native';
import { Background } from '@/components/Background';
import { ContainerCards } from '@/components/ContainerCards';
import { CustomText } from '@/components/Text';
import { Box } from '@/components/Box';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
export default function HomeScreen() {
    return (
        <Background>
            <View
                style={{
                    marginTop: 64,
                    paddingTop: 250,
                    paddingBottom: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CustomText
                    type='extra-large'
                    text='Bem-vindo, Paulo'
                />
            </View>
            <ContainerCards>
                <CustomText
                    type='extra-large'
                    text='Minhas Análises'
                    style={{ color: 'white' }}
                />
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: 'white',
                        marginVertical: 12,
                        borderRadius: 2,
                    }}
                    id='divider'
                />
                <GestureHandlerRootView>
                    <FlatList
                        data={[{}, {}]}
                        ItemSeparatorComponent={() => (<View style={{ marginVertical: 12 }} />)}
                        contentContainerStyle={{ paddingBottom: 700 }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ index }) => (<Box
                            key={index}
                            extra={
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <Ionicons name="heart" size={20} color="white" />
                                    <Ionicons name="share-social-outline" size={20} color="white" />
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                <CustomText
                                    type='medium'
                                    text='Análise 1 | 20-03-24'
                                />
                                <CustomText
                                    type='medium'
                                    text='Ver detalhes'
                                    style={{ textDecorationLine: 'underline' }}
                                />
                            </View>
                        </Box>
                        )}
                    />
                </GestureHandlerRootView>
            </ContainerCards>
        </Background>
    );
}
