import React from "react";
import { Text, View } from "react-native";
import { Style } from "./styles";

export default function login() {
    return (
        <View style={Style.container}>
            <View style={Style.boxTop}>
                <Text>Top</Text>
            </View>
            <View style={Style.boxMid}>
                <Text>Mid</Text>
            </View>
            <View style={Style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}