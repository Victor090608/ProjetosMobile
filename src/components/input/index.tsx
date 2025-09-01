import React, { forwardRef, Fragment } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { Style } from "../../pages/login/styles";
import { themas } from "../../global/themes";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

// type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
// React.ComponentType<React.ComponentProps<typeof FontAwesome>>
// React.ComponentType<React.ComponentProps<typeof Octicons>>
type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLfet?: IconComponent, // Icones Nativos
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    OnIconLeftPress?: () => void, // Ação do Icone
    OnIconRightPress?: () => void,
}

export const Input = forwardRef(() => {
    return (
        <>
        <Text style={Style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={Style.boxInput}>
            <TextInput style={Style.input}/>
            <MaterialIcons name="email" size={20} color={themas.colors.gray}/>
        </View>
        </>
    )
})