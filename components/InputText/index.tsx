import { TextInput, TextInputProps } from 'react-native';

export function InputText({ ...rest }: TextInputProps) {
    return (
        <TextInput
            value=''
            onChangeText={() => {}}
            placeholder=''
            style={[
                {
                    width: '100%',
                    fontSize: 18,
                    color: '#000',
                    paddingHorizontal: 8,
                    paddingVertical: 12,
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                    borderBottomColor: '#000',
                },
            ]}
            placeholderTextColor={'#696969'}
            {...rest}
        />
    );
}
