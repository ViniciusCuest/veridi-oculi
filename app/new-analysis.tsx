import { Dimensions, Pressable, View } from 'react-native';
import {
    FontAwesome,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';
import { Background } from '@/components/Background';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { ContainerCards } from '@/components/ContainerCards';
import { Radio } from '@/components/Radio';
import { CustomText } from '@/components/Text';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export default function Analysis() {
    const { replace } = useRouter();
    return (
        <Background>
            <View style={{ height, width: '100%' }}>
                <View
                    style={{
                        marginTop: 80,
                        paddingBottom: 32,
                        zIndex: 9999,
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            marginTop: -16,
                            left: 0,
                            right: 0,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: Colors.green200,
                                height: 90,
                                width: 90,
                                borderRadius: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name='tree-outline'
                                size={64}
                                color={Colors.background}
                            />
                        </View>
                    </View>
                </View>
                <ContainerCards>
                    <View
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 16,
                        }}
                    >
                        <CustomText
                            type='extra-large'
                            text='Iniciar nova análise'
                            style={{ color: Colors.text }}
                        />
                    </View>
                    <Box>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottomWidth: 1,
                                paddingBottom: 8,
                                borderColor: Colors.green,
                            }}
                        >
                            <CustomText
                                text='Inserir título'
                                type='extra-large'
                                style={{
                                    color: Colors.textSecondary,
                                }}
                            />
                            <FontAwesome
                                name='pencil'
                                size={24}
                                color={Colors.green}
                            />
                        </View>
                        <Pressable
                            onPress={() => {
                                
                            }}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 200,
                                width: '100%',
                                backgroundColor: 'lightgray',
                                marginTop: 24,
                                borderRadius: 12,
                            }}
                        >
                            <MaterialIcons
                                name='add-photo-alternate'
                                size={80}
                                color={Colors.green}
                            />
                            <CustomText
                                text='Selecionar imagem'
                                type='medium'
                                style={{
                                    color: Colors.textSecondary,
                                }}
                            />
                        </Pressable>
                        <View style={{ marginTop: 16 }}>
                            <CustomText
                                text='Qualidade da imagem'
                                type='large'
                            />
                            <Radio />
                            <Button
                                onPress={() => {
                                    replace('/report');
                                }}
                                title='Continuar'
                                textSize='extra-large'
                            />
                        </View>
                    </Box>
                </ContainerCards>
            </View>
        </Background>
    );
}
