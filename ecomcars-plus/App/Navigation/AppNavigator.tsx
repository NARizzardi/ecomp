import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import SignUpScreen from '../Containers/SignUpScreen/SignUpScreen';
import AppHeader from '../Components/AppHeader/AppHeader';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="LoginScreen"
    screenOptions={{
        headerShown: false
    }}>
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
);

const AppStackScreen = () => <AppHeader />;

const RootStack = createStackNavigator();
export default function AppNavigator(loggedIn: boolean) {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={'none'}>
                {loggedIn ? (
                    <RootStack.Screen
                        name={'App'}
                        component={AppStackScreen}
                    />
                ) : (
                    <RootStack.Screen
                        name={'Auth'}
                        component={AuthStackScreen}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
