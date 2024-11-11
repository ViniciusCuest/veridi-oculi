import { ImageBackground, Platform, SafeAreaView } from 'react-native';
import background from '@/assets/images/back.png';
export function Background({
    hasImage,
    children,
}: {
    hasImage?: boolean;
    children: React.ReactElement | React.ReactElement[];
}) {
    return (
        <ImageBackground
            source={hasImage ? background : undefined}
            resizeMode={'cover'}
            style={{
                backgroundColor: '#ECECEC',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
            }}
        >
            <SafeAreaView style={{ paddingHorizontal: 24 }}>
                {children}
            </SafeAreaView>
        </ImageBackground>
    );
}
