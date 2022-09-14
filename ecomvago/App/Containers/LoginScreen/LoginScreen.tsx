import React from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import appImages from '../../Themes/appImages';
import styles from './LoginScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';
import AppInput from '../../Components/AppInput/AppInput';
import AppButton from '../../Components/AppButton/AppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <View>
                <View style={[styles.imageContainer]}>
                    <Image source={appImages.ecomvago} style={[styles.logo]} />
                </View>

                <View style={[styles.box]}>
                    <View style={{ paddingTop: 15 }}>
                        <View style={[styles.text]}>
                            <Text>Login</Text>
                        </View>
                        <Icon name="account-balance" size={30} color="#900" />
                        <Icon name="8mp" size={30} color="#900" />

                        <AppInput
                            placeholder={'E-mail'}
                            value={email}
                            onChangeText={text => this.onChangeEmail(text)}
                        />

                        <View style={[styles.text]}>
                            <Text>Senha</Text>
                        </View>
                        <AppInput
                            placeholder={'Password'}
                            isPassword={true}
                            value={password}
                            onChangeText={text => this.onChangePassword(text)}
                        />

                        <View style={[styles.btnContainer]}>
                            <AppButton
                                text={'Entrar'}
                                onPress={() => this.onLoginPress()}
                            />
                        </View>
                    </View>
                </View>
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
