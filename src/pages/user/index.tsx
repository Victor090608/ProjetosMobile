import React from "react";
import { style } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Login from "../login";
import { Ionicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        Alert.alert("", "Você saiu da conta!");
        return navigation.reset({ routes: [{ name: 'Login' }] })
    };
    return (
        <View style={style.container}>
            <Ionicons
                name="person-circle"
                size={160}
                color={themas.colors.gray}
            />
            <Text style={style.name}>
                USUÁRIO
            </Text>
            <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                <Ionicons
                    name="exit"
                    color={'#fff'}
                    size={30}
                />
                <Text style={style.logoutButtonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}