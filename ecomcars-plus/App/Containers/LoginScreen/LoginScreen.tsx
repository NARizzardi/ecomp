import React from 'react';
import { View } from 'react-native';
import { Center, Input, Button, Checkbox, StatusBar, Image, Text } from 'native-base';

import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppInput from '../../Components/AppInput/AppInput';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';
import appImages from '../../Themes/appImages';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {
    email: string;
    password: string;
    remember: boolean;
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            remember: false,
        };
    }

    onChangeEmail = (text: string) => {
        this.setState({
            email: text,
        });
    };

    onChangePassword = (text: string) => {
        this.setState({
            password: text,
        });
    };

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        const { email, password, remember } = this.state;
        const auth: Login = {
            email,
            password,
            remember,
        };
        authenticationActions.loginRequest(auth);
    };

    onSignUpPress = () => {
        this.props.navigation.navigate('Auth', { screen: 'SignUpScreen' });
    };

    onCheckedPress = (checked: boolean) => {
        this.setState({
            remember: checked,
        });
    };

    render() {
        const { email, password, remember } = this.state;
        const { authenticationState } = this.props;
        const loading = authenticationState.status == RequestStatus.WIP;
        return (
            <View style={[styles.centerView, styles.background]}>
            <StatusBar translucent backgroundColor={'transparent'}  />

                <Center>
                <Image source={appImages.logoColorida} alt={'Logo'} 
                    mt='25%'
                    alignSelf='center'
                    resizeMode='center' 
                    width='60%'
                    height='20%'/>
                
                
                    <Text style={[styles.headerText]} mt='5%'> Entrar </Text>
                

                {/* CAMPO DE EMAIL*/}
                
                    
                        <Input
                            w='80%'
                            mt='7.5%'
                            bgColor='white'
                            rounded='full'
                            placeholderTextColor='gray.700'
                            placeholder='Email'
                            autoCapitalize={'none'}
                            value={email}
                            onChangeText={text => this.onChangeEmail(text)}
                            style={[styles.input]}
                        />
                    
                

                {/* CAMPO DE SENHA */}
                
                    
                        <Input
                            w='80%'
                            mt='5%'
                            rounded='full'
                            bgColor='white'
                            placeholderTextColor='gray.700'
                            type="password"
                            placeholder={'Senha'}
                            autoCapitalize={'none'}
                            value={password}
                            onChangeText={text => this.onChangePassword(text)}
                            style={[styles.input]}
                        />
                    
                

                {/*BOTÃO DE LOGIN*/}
                
                    
                        <Button
                            size="lg"
                            width="80%"
                            mt='5%'
                            rounded="full"
                            isLoading={loading}
                            isLoadingText="Carregando..."
                            backgroundColor={'#A07A28'}
                            _text={{
                                fontSize: 'md',
                                fontWeight: 'bold',
                            }}
                            onPress={() => this.onLoginPress()}>
                            Entrar no EcomCars +
                        </Button>
                    
                

                {/*BOTÃO REGISTRAR-ME*/}
                
                    
                        <Button
                            size="lg"
                            width="80%"
                            mt='18%'
                            rounded="full"
                            backgroundColor={'#A07A28'}
                            _text={{
                                fontSize: 'md',
                                fontWeight: 'bold',
                            }}
                            onPress={() => this.onSignUpPress()}>
                            Registrar-me
                        </Button>
                    
                
                </Center>
            </View>
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
)(LoginScreen);
