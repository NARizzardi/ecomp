import React from 'react';
import {
    FlatList,
    View,
    Text
} from 'native-base';

import { NavigationProp } from '@react-navigation/native';
import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RootState } from 'App/Redux';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CarCard from '../../Components/CarCard/CarCard';
import { CarsActions } from '../../Redux/cars/actionCreators';
import { CarsState } from '../../Redux/cars/state';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
    carsActions: CarsActions;
    carsState: CarsState
}

export interface State {}

// const DATA = [
// {
//   id: 1,
//   modelo: "BMW 4 Series Coupe",
//   marca: "BMW",
//   titulo: "Sinta-se no controle",
//   imagens: [
//     "https://i.imgur.com/orKLBCq.png",
//     "https://1.bp.blogspot.com/-Oww1y-f1Kas/XtaWRNQ1GmI/AAAAAAAAeHU/JjDXj80gFw4xpl_1mSrw1kSayT-v36sfwCLcBGAsYHQ/s1600/Novo-BMW-Serie-4-Coupe-2021%2B%252846%2529.jpg",
//     "https://i.ytimg.com/vi/35ytxA4at54/maxresdefault.jpg"
//   ],
//   especificacoes: {
//     categoria: "CPE",
//     motor: "3.0T",
//     transmissao: "AT9",
//     combustivel: "Gasolina"
//   },
//   diaria: 253.98,
//   descricao: "O Série 4 foi criado quando a BMW separou os modelos de 2 portas (coupé e conversível) do Série 3 em uma série separada. O Série 4 está atualmente em sua segunda geração.",
//   colorhex: "#3393AE"
// },
// {
//   id: 2,
//   modelo: "Jeep Compass Sport",
//   marca: "Jeep",
//   titulo: "Pronto para a aventura",
//   imagens: [
//     "https://i.imgur.com/U0D6B05.png",
//     "https://www.autoo.com.br/fotos/2021/4/960_720/jeep_compass_2022_1_05042021_47664_960_720.jpg",
//     "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/03/31/jeep-compass-2021-80deg-anniversario-(1).jpg"
//   ],
//   especificacoes: {
//     categoria: "SUV",
//     motor: "2.0T",
//     transmissao: "AT6",
//     combustivel: "Flex"
//   },
//   diaria: 195.98,
//   descricao: "A faixa de valor do carro da Jeep varia de R$ 135,23 mil para o Compass Sport T270 2021/2022 a R$ 212,87 mil para o Compass Limeted TD350 4x4, conforme o site da marca.",
//   colorhex: "#A07A28"
// },
// {
//   id: 3,
//   modelo: "Jeep Renegade",
//   marca: "Jeep",
//   titulo: "Seu Jeep para o dia a dia",
//   imagens: [
//     "https://i.imgur.com/X7SpxB2.png",
//     "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/05_renegade.jpg",
//     "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/09083849/Jeep-Renegade-painel-1160x585.jpg"
//   ],
//   especificacoes: {
//     categoria: "SUV",
//     motor: "2.0T",
//     transmissao: "AT6",
//     combustivel: "Flex"
//   },
//   diaria: 144.98,
//   descricao: "Com faróis com iluminação em full LED de série. Também, o novo Jeep Renegade recebeu novos equipamentos e lanternas em LED, no caso a da sua versão Longitude Flex.",
//   colorhex: "#302E15"
// },
// {
//   id: 4,
//   modelo: "Fiat Cronos HGT",
//   marca: "Fiat",
//   titulo: "O sedan completo da Fiat",
//   imagens: [
//     "https://i.imgur.com/qzAEPgS.png",
//     "https://garagem360.com.br/wp-content/uploads/2021/05/FiatCronos13MT2-1-scaled.jpeg",
//     "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/18190453/Fiat-Cronos-interior-1160x585.jpg"
//   ],
//   especificacoes: {
//     categoria: "SED",
//     motor: "1.8A",
//     transmissao: "AT6",
//     combustivel: "Flex"
//   },
//   diaria: 90.98,
//   descricao: "O novo Cronos 2021 levou para o interior a nova identidade da marca. O Logo Script está no centro do volante e no Welcome Moving nas telas de inicialização do painel de instrumentos e da central multimídia.",
//   colorhex: "#838384"
// },
// {
//   id: 5,
//   modelo: "Fiat Argo Drive",
//   marca: "Fiat",
//   titulo: "Você não dirige, você sente",
//   imagens: [
//     "https://i.imgur.com/blJcenW.png",
//     "https://argo.fiat.com.br/content/dam/fiat/products/358/a4n/0/2022/page/360/806/06.jpg.thumb.1280.1280.png",
//     "https://1.bp.blogspot.com/-mSjPPbJSaaY/X1uFWQIW4lI/AAAAAAAAinQ/-h9cRRIElRofJFxRmJIkXpVxdccKkpG_ACLcBGAsYHQ/s2048/HGT18interior_3.jpg"
//   ],
//   especificacoes: {
//     categoria: "HAT",
//     motor: "1.0A",
//     transmissao: "M5",
//     combustivel: "Flex"
//   },
//   diaria: 79.98,
//   descricao: "Carro mais vendido do mês em maio, o Fiat Argo conseguiu o feito de liderar o mercado pela primeira vez desde que foi lançado. Ele emplacou 10.929 unidades no mês passado, segundo dados da Fenabrave.",
//   colorhex: "#9e0303"
// },
// ]

class ProfileScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount(){
      try {
        this.props.carsActions.carsRequest();
      } catch(error){
        console.warn(error)
      }
    }

    navigateToCar = (item: any) => {
      this.props.navigation.navigate("SelectedCarScreen", {car: item});
    };  

    render() {
        const { authenticationState } = this.props;
        const { carsState } = this.props;
        return (
            <View bgColor='#e5e5e5'flex={1}>
                <View flex={1}>
                    <FlatList
                        ListHeaderComponent={<Text textAlign='left' pl='10%' fontSize='2xl'> Destaques para você</Text>}
                        data={this.props.carsState.car?.data}
                        keyExtractor={item => String(item.id)}
                        renderItem={({item}) => (
                            <CarCard imagem={item.imagens[0]} modelo={item.modelo} titulo={item.titulo} cor={item.colorhex} onPress={() => this.navigateToCar(item)}/>
                        )}
                    />
                </View>
            </View>

            
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
    carsState: state.cars
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
        carsActions: bindActionCreators(
          CarsActions,
          dispatch,
      ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileScreen);
