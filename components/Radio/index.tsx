import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { CustomText } from '../Text';
import { Colors } from '@/constants/Colors';

export function Radio() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const data = [
        { id: 1, label: 'Máxima', description: '(Mais precisão)' },
        { id: 2, label: 'Média', description: '(Acurácia razoável)' },
        { id: 3, label: 'Baixa', description: '(Menos precisão)' },
    ];
    return (
        <View
            style={{
                marginVertical: 16,
                rowGap: 12,
            }}
        >
            {data.map((item) => (
                <Pressable
                    key={item.id}
                    onPress={() => {
                        setSelectedIndex(item.id);
                    }}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 8,
                    }}
                >
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            backgroundColor: Colors.gray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 6,
                        }}
                    >
                        {item.id === selectedIndex && (
                            <View
                                style={{
                                    borderRadius: 9999,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: Colors.black,
                                }}
                            />
                        )}
                    </View>
                    <CustomText
                        text={item.label}
                        type='large'
                        style={{
                            color: Colors.green,
                        }}
                    />
                    <CustomText
                        text={item.description}
                        type='medium'
                        style={{
                            color: Colors.gray,
                            fontWeight: '700',
                        }}
                    />
                </Pressable>
            ))}
        </View>
    );
}
