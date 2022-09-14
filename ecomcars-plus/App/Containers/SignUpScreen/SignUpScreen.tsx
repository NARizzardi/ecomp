import React from 'react';
import { View } from 'react-native';
import { Center, Input, Button, Image, StatusBar, Text } from 'native-base';

import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppInput from '../../Components/AppInput/AppInput';

import appStyles from '../../Themes/appStyles';
import appImages from '../../Themes/appImages';
import styles from './SignUpScreenStyles';
import { RootState } from '../../Redux';
import { SignUpActions } from '../../Redux/signUp/actionCreators';
import { SignUp } from '../../Models/SignUp';
import { SignUpState } from '../../Redux/signUp/state';
import { RequestStatus } from '../../Models/RequestStatus';

export interface Props {
    navigation: NavigationProp<any>;
    signUpActions: SignUpActions;
    signUpState: SignUpState;
}

export interface State {
    name: string;
    email: string;
    password: string;
    passwordConf: string;
}

class SignUpScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConf: '',
        };
    }

    onChangeName = (name: string) => {
        this.setState({
            name,
        });
    };

    onChangeEmail = (email: string) => {
        this.setState({
            email,
        });
    };

    onChangePassword = (password: string) => {
        this.setState({
            password,
        });
    };

    onChangePasswordConf = (passwordConf: string) => {
        this.setState({
            passwordConf,
        });
    };

    onRegistrarPress = () => {
        const { name, email, password, passwordConf } = this.state;
        const { signUpActions } = this.props;
        const newUser: SignUp = {
            nome: name,
            email,
            senha: password,
            senha_confirmation: passwordConf,
        };
        signUpActions.signUpRequest(newUser);
    };

    componentDidUpdate() {
        const { signUpState, navigation } = this.props;
        if (signUpState.status === RequestStatus.SUCCESS) {
            navigation.goBack();
        }
    }

    render() {
        const { signUpState } = this.props;
        const { name, email, password, passwordConf } = this.state;
        const loading = RequestStatus.WIP === signUpState.status;
        const showError = RequestStatus.FAILURE === signUpState.status;

        return (
            <View style={[styles.centerView, styles.background]}>
            <StatusBar translucent backgroundColor={'transparent'}  />

            <Center>
            <Image source={appImages.logoColorida} alt={'Logo'} 
                    alignSelf='center'
                    resizeMode='center' 
                    width='60%'
                    height='20%'
                    mt='25%'/>
                
                
                    <Text style={[styles.signupText]} mt='5%'> Registrar </Text>
                

                {/*CAMPO DE NOME*/}
        
                        <Input
                            style={[styles.input]}
                            placeholder={'Nome'}
                            value={name}
                            w='80%'
                            mt='5%'
                            bgColor='white'
                            rounded='full'
                            placeholderTextColor="#858585"
                            onChangeText={text => this.onChangeName(text)}
                        />
             

                {/*CAMPO DE EMAIL*/}
     
                        <Input
                            style={[styles.input]}
                            placeholder='Email'
                            value={email}
                            w='80%'
                            mt='5%'
                            bgColor='white'
                            rounded='full'
                            placeholderTextColor="#858585"
                            onChangeText={text => this.onChangeEmail(text)}
                        />
            

                {/*CAMPO DE SENHA*/}
           
                        <Input
                            style={[styles.input]}
                            placeholder={'Senha'}
                            w='80%'
                            mt='5%'
                            bgColor='white'
                            rounded='full'
                            placeholderTextColor="#858585"
                            type="password"
                            value={password}
                            onChangeText={text => this.onChangePassword(text)}
                        />                

                {/*BOTÃO REGISTRAR*/}
                        <Button
                            size="lg"
                            width="80%"
                            mt='14%'
                            rounded="full"
                            isLoading={loading}
                            isLoadingText="Carregando..."
                            bgColor="#A07A28"
                            _text={{
                                fontSize: 'md',
                                fontWeight: 'bold',
                            }}
                            onPress={() => this.onRegistrarPress()}>
                            Registrar no ecomCars+
                        </Button>
                
                
                </Center>
        </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    signUpState: state.signUp,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signUpActions: bindActionCreators(SignUpActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpScreen);
