import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
export function ContainerCards({
    children,
}: {
    children: React.ReactElement | React.ReactElement[] | any;
}) {
    return (
        <LinearGradient
            colors={[Colors.green200, Colors.green900]}
            style={{
                height: '100%',
                width: '100%',
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                paddingHorizontal: 24,
                paddingTop: 40,
                marginBottom: 150,
            }}
        >
            {children}
        </LinearGradient>
    );
}
