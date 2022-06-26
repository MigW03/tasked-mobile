import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import auth from '@react-native-firebase/auth'


function MyDay({navigation}) {


    function logout() {
        auth().signOut().then(() => console.log('Fez logout'))
    }

    return(
        <View style={styles.container}>
            <Text>Meu dia</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyDay;