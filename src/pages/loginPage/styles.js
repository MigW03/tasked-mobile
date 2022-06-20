import { StyleSheet } from "react-native"
import {colors} from '../../../assets/Colors'
import { theme } from "../../themeHandler"

export const placeholderTextColor = colors.light.text_secondary
export const statusBackground = colors[theme].background
export const statusStyle = theme == 'light' ? 'dark-content' : 'light-content' 
export const eyeIconColor = colors[theme].brand
export const inputUnderlineColor = colors[theme].brand
export const googleIconbg = colors[theme].background

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors[theme].background,
        margin: 0,
        padding: 0
    },
    welcomeView: {
        flex: 4,
        paddingHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    welcomeText: {
        fontFamily: "Poppins-Medium",
        fontSize: 35,
        color: colors[theme].text_title
    },


    formView: {
        flex: 6,
        backgroundColor: colors[theme].items_bg,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 18,
        alignItems: 'center',
    },
    pageTitle: {
        fontFamily: "Poppins-Medium",
        fontSize: 30,
        color: colors[theme].brand_title,
        marginTop: 20,
    },
    input: {
        color: colors[theme].text_primary,
        width: '80%',
        fontSize: 18,
        fontFamily: 'Poppins-Regular'
    },
    passwordView: {
        flexDirection: 'row',
        alignItems: "center",
        width: '80%',
        marginTop: 20
    },
    eyeButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsView: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: 20
    },
    loginButton: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors[theme].brand_title,
        borderRadius: 10
    },
    loginButtonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 22,
        color: colors[theme].items_bg
    },
    googleLoginButton: {
        backgroundColor: colors[theme].details_red,
        width: 65,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    forgotPasswordText: {
        fontFamily: 'Poppins-Regular',
        color: colors[theme].text_secondary,
        marginTop: 25,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    divider: {
        width: '85%',
        height: 1,
        backgroundColor: colors[theme].text_secondary,
        marginTop: 8 
    },
    registerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 20
    },
    registerText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: colors[theme].text_secondary
    },
    registerTouchable: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: colors[theme].brand_title
    }

})