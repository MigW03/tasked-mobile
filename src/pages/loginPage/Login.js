import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StatusBar, Keyboard, Alert, ActivityIndicator} from 'react-native';
import {styles, placeholderTextColor, statusBackground, statusStyle, eyeIconColor, inputUnderlineColor, googleIconbg, indicatorColor} from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import auth from '@react-native-firebase/auth'

function Login({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInLoading, setSignInLoading] = useState(false);
    

    function login() {
        if (email.length > 0 && password.length > 0) {
            Keyboard.dismiss();
            setSignInLoading(true);
            auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Keyboard.dismiss();
                setSignInLoading(false);
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                return (
                    setSignInLoading(false),
                    Alert.alert(
                    'Usuário inválido',
                    'Esse usuário não existe, faça o seu cadastro!',
                    [
                        { text: 'Digitar novamente' },
                        {
                        text: 'Ir para página de cadastro',
                        onPress: () => {
                            setPassword('')
                            setEmail('');
                            navigation.navigate('Register');
                        },
                        },
                    ],
                    )
                );
                }
                if (error.code === 'auth/invalid-email') {
                return (
                    setSignInLoading(false),
                    Alert.alert(
                    'E-mail inválido',
                    'Esse e-mail é inválido, por favor, tente novamente!',
                    ),
                    setEmail(''),
                    setPassword('')
                );
                }
                if (error.code === 'auth/wrong-password') {
                return (
                    setSignInLoading(false),
                    Alert.alert(
                    'Dados incorretos',
                    'A senha ou o e-mail estão incorretos, por favor tente novamente',
                    ),
                    setPassword('')
                );
                }

                if (error.code === 'auth/network-request-failed') {
                return (
                    setSignInLoading(false),
                    Alert.alert(
                    'Sem conexão',
                    'Parece que o seu aparelho não está conectado à rede, conecte-se e tente novamente.',
                    )
                );
                }
                setSignInLoading(false),
                Alert.alert(
                'Opps',
                'Houve um erro para realizar seu login, por favor tente novamente!',
                );
                console.log(error);
            });
        } else {
            Alert.alert(
            'Campos obrigatórios',
            'Você precisa completar os campos acima antes de prosseguir!',
            );
        }
    }

    function forgotPassword() {}

    return (

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
                        value={password}
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
                    <TouchableOpacity style={styles.loginButton} onPress={login}>
                        {
                            signInLoading ? (
                                <ActivityIndicator size='small' color={indicatorColor} />
                            ) : (
                                <Text style={styles.loginButtonText}>Entrar</Text>
                            )
                        }
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


    )
}

export default Login;