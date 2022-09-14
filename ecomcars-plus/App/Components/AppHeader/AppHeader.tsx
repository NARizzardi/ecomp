import React from 'react';
import { StatusBar, Image, View } from 'native-base';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../Redux';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DataScreen from '../../Containers/DataScreen/DataScreen';
import ProfileScreen from '../../Containers/ProfileScreen/ProfileScreen';
import SelectedCarScreen from '../../Containers/SelectedCarScreen/SelectedCarScreen';
import TextScreen from '../../Containers/TextScreen/TextScreen';
import appColors from '../../Themes/appColors';
import { borderRadius, height } from 'styled-system';
import appImages from '../../Themes/appImages';
import { createStackNavigator } from '@react-navigation/stack';
export interface Props {
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {}

const BottomTab = createBottomTabNavigator();
const CarStack = createStackNavigator();

const BottomTabScreen = () => (

    <BottomTab.Navigator
                    tabBarOptions={{
                        
                        activeTintColor: appColors.gold,
                        labelStyle: {
                            fontSize: 0,
                        },
                        style: { /*borderTopStartRadius: 35, borderTopEndRadius: 35,*/ height: hp('8'), backgroundColor: '#fff'}
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, focused }) => {
                            let iconName;
                            if (route.name === 'Texto') {
                                iconName = 'car';
                                color = focused ? appColors.gold : '#a8a8a8';
                            } else if (route.name === 'Layout') {
                                iconName = 'home';
                                color = focused ? appColors.gold : '#a8a8a8';
                            } else if (route.name === 'Data') {
                                iconName = 'location-exit';
                                color = focused ? appColors.gold : '#a8a8a8';
                            }
                            return (
                                <Icon
                                    name={iconName}
                                    size={30}
                                    color={color}
                                />
                            );
                        },
                    })}>
                    <BottomTab.Screen name="Layout" component={ProfileScreen} />
                    <BottomTab.Screen name="Texto" component={TextScreen} />
                    <BottomTab.Screen name="Data" component={DataScreen} />
                </BottomTab.Navigator>
);




class AppHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
    }
    render() {
        const { authenticationState } = this.props;
        return (
            <>
            
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <View bgColor='#e5e5e5'>
                        <Image source={appImages.logoColorida} resizeMode='center' alignSelf='center' mt='7.5%' w={wp('45%')} h={hp('10%')} alt="logo colorida"/>
                </View>
                
                <CarStack.Navigator initialRouteName="LoginScreen"
                    screenOptions={{
                    headerShown: false
                }}>
                    <CarStack.Screen name="ProfileScreen" component={BottomTabScreen} />
                    <CarStack.Screen name="SelectedCarScreen" component={SelectedCarScreen} />
                </CarStack.Navigator>
            
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppHeader);
