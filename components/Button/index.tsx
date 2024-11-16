import { Pressable } from 'react-native';
import { CustomText, TypeProps } from '../Text';
import { Colors } from '@/constants/Colors';

export function Button({
    title,
    textSize,
    onPress,
}: {
    title: string;
    textSize: TypeProps;
    onPress: () => void;
}) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                width: '100%',
                backgroundColor: Colors.green,
                paddingVertical: 12,
                alignItems: 'center',
                borderRadius: 10,
                justifyContent: 'center',
            }}
        >
            <CustomText
                text={title}
                type={textSize}
                style={{ color: 'white' }}
            />
        </Pressable>
    );
}
