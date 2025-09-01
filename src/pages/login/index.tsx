import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { Style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from '../../global/themes';
import { Input } from "../../components/input";



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true)
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }
            setTimeout(() => {
                if (email == 'vvbarcellos11@gmail.com' && password == '12345678') {
                    Alert.alert('Logado com sucesso!');
                } else {
                    Alert.alert('Usuário não encontrado.');
                }
                setLoading(false)
            }, 3000)
        } catch (error) {
            console.log(error);
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
                IconRightName="eye-closed"
                />
                {/* <View style={Style.boxInput}>
                    <TextInput
                        style={Style.input}
                        value={email}
                        onChangeText={setEmail}
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
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View> */}
            </View>
            <View style={Style.boxBottom}>
                <TouchableOpacity style={Style.button} onPress={() => getLogin()}>
                    {
                        loading ? <ActivityIndicator color={'#ffff'} size={"small"} /> :
                            <Text style={Style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={Style.textBottom}>Não tem conta? <Text style={{ color: themas.colors.primary }}>Crie uma</Text></Text>
        </View>
    )
}