import { StyleProp, Text, TextStyle, View } from 'react-native';
export type TypeProps = 'small' | 'medium' | 'large' | 'extra-large';
export function CustomText({
    text,
    type,
    style,
    data,
}: {
    text: string;
    type: TypeProps;
    data?: string;
    style?: StyleProp<TextStyle>;
}) {
    const textStyle = (style: string): StyleProp<TextStyle> => {
        switch (style) {
            case 'small':
                return { fontSize: 12, fontFamily: 'mont400' };
            case 'medium':
                return { fontSize: 14, fontFamily: 'mont400' };
            case 'large':
                return { fontSize: 16, fontFamily: 'mont400' };
            case 'extra-large':
                return { fontSize: 20, fontFamily: 'mont700' };
            default:
                return { fontSize: 28, fontFamily: 'mont700' };
        }
    };
    if (data)
        return (
            <Text style={[textStyle(type), { fontFamily: 'mont700', lineHeight: 24 }, style]}>
                {`\u2022 ${text} `}
                <Text style={[style, { fontFamily: 'mont400' }]}>{data}</Text>
            </Text>
        );
    return <Text style={[textStyle(type), style]}>{text}</Text>;
}
