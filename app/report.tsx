import { Background } from '@/components/Background';
import { Box } from '@/components/Box';
import { ContainerCards } from '@/components/ContainerCards';
import { CustomText } from '@/components/Text';
import { Colors } from '@/constants/Colors';
import { Dimensions, View, Image } from 'react-native';
import {
    GestureHandlerRootView,
    ScrollView,
} from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

export default function Report() {
    return (
        <Background>
            <ContainerCards>
                <View style={{ marginTop: 100 }} />
                <Box style={{ height: height - 180, rowGap: 4 }}>
                    <CustomText
                        type='large'
                        text='Espécie identificada'
                    />
                    <CustomText
                        type='extra-large'
                        text='Embauba'
                    />
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: Colors.gray,
                            marginVertical: 12,
                        }}
                    />
                    <GestureHandlerRootView>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CustomText
                                type='large'
                                text='Informações:'
                                style={{ fontFamily: 'mont700' }}
                            />
                            <View
                                style={{
                                    paddingLeft: 16,
                                    marginVertical: 8,
                                }}
                            >
                                <CustomText
                                    type='large'
                                    text='Nome comum:'
                                    data='Embaúba'
                                />
                                <CustomText
                                    type='large'
                                    text='Nome científico:'
                                    data='Cecropia pachystachya'
                                />
                                <CustomText
                                    type='large'
                                    text='Descrição:'
                                    data='A Embaúba é uma árvore nativa da Mata Atlântica, conhecida por seu tronco reto e oco, além de folhas grandes e lobadas. É uma espécie pioneira que se desenvolve rapidamente em áreas desmatadas e é importante para o equilíbrio ecológico, pois suas folhas são utilizadas em diversas práticas medicinais populares.'
                                />
                                <CustomText
                                    type='large'
                                    text='Grau de ameaça:'
                                />
                            </View>
                            <CustomText
                                type='large'
                                text='Imagem da espécie:'
                                style={{ fontFamily: 'mont700' }}
                            />
                            <Image
                                source={{uri: 'https://www.wikiaves.com.br/wiki/_media/flora:embauba.jpg?w=400&tok=2b5556'}}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 160,
                                    width: '100%',
                                    backgroundColor: 'lightgray',
                                    marginVertical: 8,
                                    borderRadius: 12,
                                }}
                            />
                            <CustomText
                                type='large'
                                text='Imagem analisada:'
                                style={{ fontFamily: 'mont700' }}
                            />
                            <Image  
                                source={{uri: 'https://s2.glbimg.com/o5kSCaZGmjCOfkR-33lyhPDqJ44=/1200x630/s.glbimg.com/jo/g1/f/original/2016/06/30/embauba-prateada.jpg'}}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 160,
                                    width: '100%',
                                    backgroundColor: 'lightgray',
                                    marginVertical: 8,
                                    borderRadius: 12,
                                }}
                            />
                            <CustomText
                                type='large'
                                text='Resumo de identificações:'
                                style={{ fontFamily: 'mont700' }}
                            />
                            <View
                                style={{
                                    paddingLeft: 16,
                                    marginVertical: 8,
                                }}
                            >
                                <CustomText
                                    type='large'
                                    text='Alta confiança:'
                                />
                                <CustomText
                                    type='large'
                                    text='Confiança média:'
                                />
                                <CustomText
                                    type='large'
                                    text='Baixa confiança'
                                />
                            </View>
                            <CustomText
                                type='large'
                                text='Recomendações:'
                                style={{ fontFamily: 'mont700' }}
                            />
                            <View
                                style={{
                                    paddingLeft: 16,
                                    marginTop: 8,
                                    marginBottom: 16,
                                    rowGap: 8,
                                }}
                            >
                                <CustomText
                                    text='Validação em campo:'
                                    data='Recomenda-se a verificação em campo das detecções para confirmar a presença da Embaúba nos pontos indicados, especialmente aqueles com confiança média e baixa.'
                                    type='large'
                                />
                                <CustomText
                                    text='Monitoramento Contínuo:'
                                    data='Realizar análises periódicas para monitorar possíveis mudanças na população da espécie na área.'
                                    type='large'
                                />
                                <CustomText
                                    text='Baixa confiança'
                                    data='Considerar o treinamento do modelo para incluir outras espécies de interesse, aumentando a abrangência e utilidade das análises futuras.'
                                    type='large'
                                />
                            </View>
                            <CustomText
                                type='large'
                                text='Conclusão:'
                                style={{ fontFamily: 'mont700' }}
                            />
                            <View
                                style={{
                                    paddingLeft: 16,
                                    marginTop: 8,
                                    marginBottom: 16,
                                }}
                            >
                                <CustomText
                                    type='large'
                                    text='O modelo identificou um total de 9 árvores de Embaúba na área analisada, com maior concentração de detecções de alta confiança. Este resultado sugere uma presença significativa da espécie na região, o que pode ser relevante para estudos de biodiversidade, planos de manejo florestal e ações de conservação.'
                                />
                            </View>
                        </ScrollView>
                    </GestureHandlerRootView>
                </Box>
            </ContainerCards>
        </Background>
    );
}
