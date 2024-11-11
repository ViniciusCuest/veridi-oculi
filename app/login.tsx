import { StyleSheet, Platform, View } from 'react-native';
import { InputText } from '@/components/InputText';
import { Background } from '@/components/Background';
import { Box } from '@/components/Box';
import { CustomText } from '@/components/Text';
import { Button } from '@/components/Button';
import { useNavigation, useRouter } from 'expo-router';
export default function HomeScreen() {
    const { replace } = useRouter();
    return (
        <Background hasImage>
            <Box
                style={{
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 24,
                    rowGap: 8,
                }}
                extra={
                    <>
                        <CustomText
                            text='Esqueci a senha'
                            type='small'
                            style={{ color: 'white' }}
                        />
                        <CustomText
                            type='small'
                            text='Não tenho cadastro'
                            style={{ color: 'white' }}
                        />
                    </>
                }
            >
                <CustomText
                    text='Acesse sua conta'
                    type='extra-large'
                    style={{ color: '#566F52' }}
                />
                <InputText placeholder='login' />
                <InputText
                    placeholder='senha'
                    secureTextEntry={true}
                />
                <View
                    style={{
                        width: '100%',
                        rowGap: 16,
                        marginTop: 12,
                        alignItems: 'center',
                    }}
                >
                    <Button
                        textSize={'large'}
                        title={'Entrar'}
                        onPress={() => {
                            replace('/');
                        }}
                    />
                    <CustomText
                        text='ou'
                        type='large'
                        style={{ color: '#566F52' }}
                    />
                    <Button
                        title={'Continuar com Google'}
                        textSize={'large'}
                    />
                    <Button
                        title={'Continuar com Facebook'}
                        textSize={'large'}
                        style={{ color: 'white' }}
                    />
                </View>
            </Box>
        </Background>
    );
}
