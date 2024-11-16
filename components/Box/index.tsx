import { Colors } from '@/constants/Colors';
import { StyleProp, View, ViewStyle } from 'react-native';

export function Box({
    style,
    children,
    extra,
}: {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactElement | React.ReactElement[];
    extra?: React.ReactElement;
}) {
    return (
        <View style={{ backgroundColor: Colors.background, borderRadius: 20 }}>
            <View style={[{ padding: 16, borderRadius: 20 }, style]}>
                {children}
            </View>
            {extra && (
                <View
                    style={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        width: '100%',
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 24,
                        backgroundColor: Colors.green900,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {extra}
                </View>
            )}
        </View>
    );
}
