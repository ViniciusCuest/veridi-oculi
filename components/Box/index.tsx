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
        <View style={{ backgroundColor: '#fff', borderRadius: 20 }}>
            <View style={[{ padding: 16, backgroundColor: '#ffffff' }, style]}>
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
                        backgroundColor: '#566F52',
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
