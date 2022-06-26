import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './pages/loginPage/Login'
import Register from './pages/registerPage/Register'
import MyDay from './pages/MyDay/MyDay'

import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();

export default function Routes() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if(user) {
        return(
            <Stack.Navigator>
                <Stack.Screen name="MyDay" component={MyDay} />
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            </Stack.Navigator>
        )
    }
}