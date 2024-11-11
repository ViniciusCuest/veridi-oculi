import { StyleProp, Text, TextStyle } from 'react-native';

export function CustomText({
    text,
    type,
    style,
}: {
    text: string;
    type: 'small' | 'medium' | 'large' | 'extra-large';
    style?: StyleProp<TextStyle>;
}) {
    const textStyle = (style: string): StyleProp<TextStyle> => {
        switch (style) {
            case 'small':
                return { fontSize: 12 };
            case 'medium':
                return { fontSize: 14 };
            case 'large':
                return { fontSize: 16, fontWeight: '500' };
            case 'extra-large':
                return { fontSize: 20, fontWeight: '700' };
        }
    };
    return <Text style={[textStyle(type), style]}>{text}</Text>;
}
