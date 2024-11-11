import { Pressable } from 'react-native';
import { CustomText } from '../Text';

export function Button({ title, textSize, onPress }: any) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                width: '100%',
                backgroundColor: '#566F52',
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
