import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import SignUpScreen from '../Containers/SignUpScreen/SignUpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../Containers/ExploreScreen/ExploreScreen';
import SettingsScreen from '../Containers/SettingsScreen/SettingsScreen';
import HotelScreen from '../Containers/HotelScreen/HotelScreen';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="LoginScreen">
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
);

const Stack = createStackNavigator();
const StackScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="ProfileScreen">
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HotelScreen" component={HotelScreen} />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const BottomTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Inicio"
        tabBarOptions={{
            showIcon: true,
            activeTintColor: '#007EAB',
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Inicio') {
                    iconName = 'magnify';
                    color = focused ? '#007EAB' : '#A8A8A8';
                } else if (route.name === 'Explorar') {
                    iconName = 'map-marker';
                    color = focused ? '#007EAB' : '#A8A8A8';
                } else if (route.name === 'Configurações') {
                    iconName = 'cog';
                    color = focused ? '#007EAB' : '#A8A8A8';
                }

                return <Icon name={iconName} size={size} color={color} />;
            },
        })}>
        <Tab.Screen name="Inicio" component={StackScreen} />
        <Tab.Screen name="Explorar" component={ExploreScreen} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
);

const RootStack = createStackNavigator();
export default function AppNavigator(loggedIn: boolean) {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={'none'}>
                {loggedIn ? (
                    <RootStack.Screen
                        name={'Auth'}
                        component={AuthStackScreen}
                    />
                ) : (
                    <RootStack.Screen
                        name={'App'}
                        component={BottomTabScreen}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
