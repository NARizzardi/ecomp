import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RootState } from '../../Redux';
import styles from './ProfileScreenStyles';
import { FlatList } from 'react-native-gesture-handler';
import HotelCard from '../../Components/HotelCard/HotelCard';
import appImages from '../../Themes/appImages';
import AppInput from '../../Components/AppInput/AppInput';
import appColors from '../../Themes/appColors';
import { ScrollView } from 'react-native';
import { HotelState } from '../../Redux/hotel/state';
import { HotelActions } from '../../Redux/hotel/actionCreators';
import { Hotel } from '../../Models/Hotel';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
    hotelState: HotelState;
    hotelActions: HotelActions;
}

export interface State {
    destino: string;
}

class ProfileScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            destino: '',
        };
    }

    componentDidMount() {
        try {
            this.props.hotelActions.hotelRequest();
        } catch (error) {
            console.warn(error);
        }
    }

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        authenticationActions.logoutRequest();
    };

    componentDidUpdate() {}

    onChangeText = (text: string) => {
        this.setState({
            destino: text,
        });
    };

    onSearchPress = () => {
        console.warn('botão pressionado =]');
    };

    navigateToHotel = (item: any) =>{
        this.props.navigation.navigate('HotelScreen', {hotel: item});
    }
    render() {
        const { hotelState } = this.props;
        const { destino } = this.state;
        return (
            <View style={[styles.viewGeral]}>
                <StatusBar backgroundColor={appColors.fundo} />
                <View style={[styles.imagemView]}>
                    <Image
                        style={[styles.imagem]}
                        source={appImages.ecomvago}
                    />
                </View>

                <View style={[styles.pesquisa]}>
                    <View style={[styles.cidade]}>
                        <Text style={[styles.texto]}> Destino </Text>
                        <AppInput
                            placeholder={'Cidade'}
                            isPassword={false}
                            autoCapitalize={'none'}
                            value={destino}
                            onChangeText={text => this.onChangeText(text)}
                        />
                    </View>
                    <View style={[styles.data]}>
                        <View style={[styles.divisao]}>
                            <Text style={[styles.texto]}> Datas </Text>
                            <Text style={[styles.opcoes]}>
                                {' '}
                                8 de mar - 8 de abr{' '}
                            </Text>
                        </View>

                        <View>
                            <Text style={[styles.texto]}> Quartos </Text>
                            <Text style={[styles.opcoes]}>
                                {' '}
                                2 hóspedes, 1 quarto{' '}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.filtro]}>
                        <AppButton
                            text={'Pesquisar'}
                            onPress={() => this.onSearchPress()}
                        />
                    </View>
                </View>

                <View style={[styles.aviso]}>
                    <Text style={[styles.avisoTextoGeral]}>
                        <Text style={[styles.negrito]}>Importante: </Text>
                        <Text>
                            as restrições relacionadas à COVID-19 mudam com
                            frequência. Por isso,{' '}
                        </Text>
                        <Text style={[styles.blue]}>informe-se </Text>
                        <Text>
                            {' '}
                            antes de viajar. Fique em segurança. Para facilitar
                            sua pesquisa, criamos um{' '}
                        </Text>
                        <Text style={[styles.blue]}>
                            resumo das restrições de viagem{' '}
                        </Text>
                        <Text>em vigor em cada país. </Text>
                    </Text>
                </View>

                <View style={[styles.preferidos]}>
                    <Text style={[styles.preferidoText]}>
                        OS PREFERIDOS DOS HÓSPEDES
                    </Text>
                    <View style={[styles.list]}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={this.props.hotelState.hotel?.hoteis}
                            keyExtractor={(hotel: Hotel, index: number) => String(index)}
                            renderItem={({ item }) => (
                                <HotelCard
                                    imagem={item.imagem}
                                    nome={item.nome}
                                    cidade={item.cidade}
                                    nota={item.avaliacao?.avaliacao_geral}
                                    onPress={() => this.navigateToHotel(item)}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
    hotelState: state.hotel,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
        hotelActions: bindActionCreators(HotelActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileScreen);
