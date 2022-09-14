import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from '../Containers/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import SignUpScreen from '../Containers/SignUpScreen/SingUpScreen';
import ForgotPassScreen from '../Containers/ForgotPassScreen/ForgotPassScreen'


const headerOpt: StackNavigationOptions={
    headerShown: false
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="WelcomeScreen">
        <AuthStack.Screen options={headerOpt} name="WelcomeScreen" component={WelcomeScreen} />
        <AuthStack.Screen options={headerOpt} name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen options={headerOpt} name="ForgotPassScreen" component={ForgotPassScreen} />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
    <AppDrawer.Navigator>
        <AppDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </AppDrawer.Navigator>
);

const RootStack = createStackNavigator();
export default function AppNavigator(loggedIn: boolean) {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={'none'}>
                {loggedIn ? (
                    <RootStack.Screen
                        name={'App'}
                        component={AppDrawerScreen}
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
