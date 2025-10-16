import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { Style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from '../../global/themes';
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('usuario@mail.com');
    const [password, setPassword] = useState('123');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true)
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }

            if (email === 'usuario@mail.com' && password == '123') {
                navigation.reset({ routes: [{ name: "BottomRoutes" }] })
            } else {
                Alert.alert('Atenção', 'Senha ou E-mail inválido!')
            }

            console.log("Funcionou!");

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

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
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword ? "eye-closed" : "eye"} // Logica do olho aberto ao ver a senha
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={Style.boxBottom}>
                <Button text="Entrar" loading={loading} onPress={() => getLogin()} />
            </View>
            <Text style={Style.textBottom}>Não tem conta? <Text style={{ color: themas.colors.primary }}>Crie uma</Text></Text>
        </View>
    )
}