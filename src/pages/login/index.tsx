import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { Style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

export default function login() {
    return (
        <View style={Style.container}>
            <View style={Style.boxTop}>
                <Image
                    source={Logo}
                    style={Style.logo}
                    resizeMode="contain"
                />
                <Text style={Style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={Style.boxMid}>
                <Text style={Style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={Style.boxInput}>
                    <TextInput
                        style={Style.input}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}

                    />
                </View>
                <Text style={Style.titleInput}>SENHA</Text>
                <View style={Style.boxInput}>
                    <TextInput
                        style={Style.input}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={Style.boxBottom}>
            </View>
        </View>
    )
}