import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { styles, eyeIconColor, googleIconbg, inputUnderlineColor, placeholderTextColor, statusBackground, statusStyle, backPageIconColor } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import auth from '@react-native-firebase/auth'


function Register({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    function createUser() {
        if(email.length > 0 && password.length) {
            if(password == confirmPassword) {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User account created & signed in!');
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        }

                        if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        }

                        console.error(error);
                    });
            } else {
                Alert.alert("Senhas diferentes", "Suas senhas estão diferentes");
            }
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBackground} translucent barStyle={statusStyle}/>

            <View style={styles.welcomeView}>
                <Image source={require('../../../assets/logo.png')} resizeMethod='auto' resizeMode='contain' style={{width: 87 }}/>
                <Text style={styles.welcomeText}>
                    Seja bem vindo ao Tasked!
                </Text>
            </View>

            <View style={styles.formView}>
                <View style={styles.formHeader}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={28} color={backPageIconColor} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Cadastro</Text>
                </View>
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
                        value={password}
                        onChangeText={newText => setPassword(newText)}
                        underlineColorAndroid={inputUnderlineColor}
                    />
                    
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeButton}>
                        <Icon name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} color={eyeIconColor} size={28} />
                    </TouchableOpacity>
                </View>
                <View style={styles.passwordView}>
                    <TextInput
                        placeholder="Confirme sua senha"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={!confirmPasswordVisible}
                        placeholderTextColor={placeholderTextColor}
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={newText => setConfirmPassword(newText)}
                        underlineColorAndroid={inputUnderlineColor}
                    />
                    
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={styles.eyeButton}>
                        <Icon name={confirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'} color={eyeIconColor} size={28} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.signInButton} onPress={createUser}>
                        <Text style={styles.signInButtonText}>Criar conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleLoginButton}>
                        <Icon name="google" size={32} color={googleIconbg}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.thankYouText}>Obrigado por  se cadastrar conosco!</Text>
            </View>
        </View>
    )
}

export default Register;