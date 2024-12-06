import { Colors } from '@/constants/Colors';
import {
    Feather,
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
} from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

type Props = {
    onTap: () => void;
};
export function FloatingButton({ onTap }: Props) {
    return (
        <View
            style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                bottom: 0,
                zIndex: 9999,
                marginBottom: 52,
            }}
        >
            <Pressable
                onPress={onTap}
                style={{
                    position: 'relative',
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    backgroundColor: Colors.background,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MaterialCommunityIcons
                    name='tree-outline'
                    size={52}
                    color='black'
                />
                <FontAwesome5
                    name='plus'
                    size={28}
                    color='black'
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                    }}
                />
            </Pressable>
        </View>
    );
}
