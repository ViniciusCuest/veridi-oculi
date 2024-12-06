import { StyleSheet, Platform, View } from 'react-native';
import { InputText } from '@/components/InputText';
import { Background } from '@/components/Background';
import { Box } from '@/components/Box';
import { CustomText } from '@/components/Text';
import { Button } from '@/components/Button';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
export default function HomeScreen() {
    const { replace } = useRouter();
    return (
        <Background hasImage>
            <View style={{ paddingHorizontal: 24, width: '100%', backgroundColor: 'transparent' }}>
                <Box
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        marginTop: 24,
                        rowGap: 8,
                        //backgroundColor: 'transparent'
                    }}
                    extra={
                        <>
                            <CustomText
                                text='Esqueci a senha'
                                type='small'
                                style={{ color: Colors.text }}
                            />
                            <CustomText
                                type='small'
                                text='Não tenho cadastro'
                                style={{ color: Colors.text }}
                            />
                        </>
                    }
                >
                    <CustomText
                        text='Acesse sua conta'
                        type='extra-large'
                        style={{ color: Colors.textSecondary }}
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
                            style={{ color: Colors.textSecondary }}
                        />
                        <Button
                            title={'Continuar com Google'}
                            textSize={'large'}
                            onPress={() => { }}
                        />
                        <Button
                            title={'Continuar com Facebook'}
                            textSize={'large'}
                            onPress={() => { }}
                        //style={{ color: Colors.text }}
                        />
                    </View>
                </Box>
            </View>
        </Background>
    );
}
