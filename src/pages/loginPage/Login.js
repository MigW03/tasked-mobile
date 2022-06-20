import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StatusBar, KeyboardAvoidingView} from 'react-native';
import {styles, placeholderTextColor, statusBackground, statusStyle, eyeIconColor, inputUnderlineColor, googleIconbg} from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function Login({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function forgotPassword() {}

    return (

        <KeyboardAvoidingView style={{flex: 1}} behavior="heigth">

        <View  style={styles.container}>
            <StatusBar backgroundColor={statusBackground} translucent barStyle={statusStyle}/>
            
            <View style={styles.welcomeView}>
                <Image source={require('../../../assets/logo.png')} resizeMethod='auto' resizeMode='contain' style={{width: 87 }}/>
                <Text style={styles.welcomeText}>Bem vindo de volta ao Tasked!</Text>
            </View>
            

                
            <View style={styles.formView}>
                <Text style={styles.pageTitle}>Login</Text>
                <TextInput
                    placeholder="E-mail"
                    autoCorrect={false}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize="none"
                    style={styles.input}
                    value={email}
                    onChangeText={newText => setEmail(newText)}
                    underlineColorAndroid={inputUnderlineColor}    
                />
                <View style={styles.passwordView}>
                    <TextInput
                        placeholder="Senha"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={!passwordVisible}
                        placeholderTextColor={placeholderTextColor}
                        style={styles.input}
                        onChangeText={newText => setPassword(newText)}
                        underlineColorAndroid={inputUnderlineColor}
                    />
                    
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeButton}>
                        <Icon name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} color={eyeIconColor} size={28} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleLoginButton}>
                        <Icon name="google" size={32} color={googleIconbg}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Esqueci minha senha!</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <View style={styles.registerView}>
                    <Text style={styles.registerText}>Não possui conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.registerTouchable}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>


    )
}

export default Login;