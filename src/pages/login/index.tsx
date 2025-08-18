import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { Style } from "./styles";
import Logo from "../../assets/logo.png";

export default function login() {
    return (
        <View style={Style.container}>
            <View style={Style.boxTop}>
                <Image
                source={Logo}
                />
                <Text>Bem vindo de volta!</Text>
            </View>
            <View style={Style.boxMid}>
                <Text>Endereço de E-mail</Text>
                <TextInput />
                <Text>Senha</Text>
                <TextInput />
            </View>
            <View style={Style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}