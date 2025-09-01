import React, { forwardRef, Fragment } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { style } from "./style";
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
        <Fragment>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxInput}>
            <TextInput style={style.input}/>
            <MaterialIcons name="email" size={20} color={themas.colors.gray}/>
        </View>
        </Fragment>
    )
})