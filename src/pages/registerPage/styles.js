import { StyleSheet } from "react-native";
import { colors,  } from "../../../assets/Colors";
import {theme} from '../../themeHandler'

export const placeholderTextColor = colors.light.text_secondary
export const statusBackground = colors[theme].background
export const statusStyle = theme == 'light' ? 'dark-content' : 'light-content' 
export const eyeIconColor = colors[theme].brand
export const inputUnderlineColor = colors[theme].brand
export const googleIconbg = colors[theme].background
export const backPageIconColor = colors[theme].brand_title

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        backgroundColor: colors[theme].background
    },
    welcomeView: {
        flex: 4,
        paddingHorizontal: 20,
        justifyContent: 'center'
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
    formHeader: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    backButton: {
        alignItems: "center",
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        marginLeft: 20
    },
    pageTitle: {
        fontFamily: "Poppins-Medium",
        fontSize: 30,
        color: colors[theme].brand_title,
        textAlignVertical: "bottom",
        includeFontPadding: false
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
    signInButton: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors[theme].brand_title,
        borderRadius: 10
    },
    signInButtonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 22,
        color: colors[theme].items_bg
    },
    googleLoginButton: {
        width: 65,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: colors[theme].details_red,
    },
    thankYouText: {
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        color: colors[theme].text_secondary,
        alignSelf: "center",
        textAlign: 'center',
        position: 'relative',
        top: 40
    }
})