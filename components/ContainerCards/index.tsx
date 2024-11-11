import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

export function ContainerCards({
   children,
}: {
   children: React.ReactElement | React.ReactElement[] | any;
}) {
   return (

      <LinearGradient
         colors={['#566F52B2', '#566f52c7']}
         style={{
            height: '100%',
            width: '100%',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            paddingHorizontal: 24,
            paddingTop: 40,
            marginBottom: 150
         }}
      >
         {children}
      </LinearGradient>
   );
}
