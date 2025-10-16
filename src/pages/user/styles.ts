import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // remover para adicionar ao topo
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: themas.colors.gray,
    },
    logoutButton: {
        marginTop: 40,
        width: 250,
        height: 50,
        flexDirection: 'row',
        backgroundColor: themas.colors.red,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,

        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        gap: 5,

    },
    logoutButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})