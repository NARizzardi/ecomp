import React from 'react';
import { Button, Image, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather';
import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import AppChecked from '../../Components/AppChecked/AppChecked';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';
import { NavigationActions } from 'react-navigation';

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
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView
				style={styles.background}>
                    <View>
                    <Icon style={[styles.iconStyle]} 
                            onPress={() => this.props.navigation.goBack()}
                            size={40}
                            name="chevron-left"     
                            color="#FFF" />
                    </View>
                <View style={[appStyles.centerView]}>
                    <View style={[appStyles.centerView, styles.imgView]}>
                    <Image style={[styles.img]} source={require('../../Images/general/Hera_Logo_Principal.png')} />
                    </View>
                    <View style={[styles.whiteBg]}>
                        <Text style={[styles.loginTextStyle]}>Entrar no Hera</Text>
                        <View style={[styles.optionContainer]}>
                            <AppInput
                                placeholder={'E-mail'}
                                autoCapitalize={'none'}
                                value={email}
                                onChangeText={text => this.onChangeEmail(text)}
                            />
                        </View>
                        <View style={[styles.optionContainer]}>
                            <AppInput
                                placeholder={'Senha'}
                                isPassword={true}
                                autoCapitalize={'none'}
                                value={password}
                                onChangeText={text => this.onChangePassword(text)}
                            />
                        </View>
                        {loading ? (
                            <View style={[styles.optionContainer]}>
                                <AppButton text={'Autenticando...'} onPress={() => {}} />
                            </View>
                        ) : (
                            [
                                <View key={'login'} style={[styles.optionContainer]}>
                                    <AppButton
                                        text={'Entrar'}
                                        onPress={() => this.onLoginPress()}
                                    />
                                </View>,
                            ]
                        )}
                        <Text onPress={() => navigate('ForgotPassScreen')} 
                        style={[styles.forgotTextStyle]}>Esqueci minha senha</Text>    
                    </View>
                </View>
            </KeyboardAvoidingView>
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
