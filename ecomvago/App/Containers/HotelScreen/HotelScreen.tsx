import React from 'react';
import { View, Text, Share, StatusBar, Modal } from 'react-native';
import { NavigationProp, Route } from '@react-navigation/native';
import styles from './HotelScreenStyles';
import HotelScreenStyles from './HotelScreenStyles';
import { Hotel } from '../../Models/Hotel';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../Themes/appColors';
import AppProgressBar from '../../Components/AppProgressBar/AppProgressBar';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
export interface Props {
    navigation: NavigationProp<any>;
    route: Route<any>;
}

export interface State {
    hotel: Hotel | null;
    avaliacao_limpeza: number;
    avaliacao_servico: number;
    mostrarOferta: boolean;
    backgroundColor: string
}

class HotelScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hotel: null,
            avaliacao_limpeza: 0,
            avaliacao_servico: 0,
            mostrarOferta: false,
            backgroundColor: 'transparent'
        };
    }


 async onShare(){
    try {
        const result = await Share.share({
          message:
            'Ecomvago é o app para buscar o hotel ideal',
        });

      } catch (error) {
        alert(error.message);
      }

 }

    componentDidMount() {
        const params: any = this.props.route.params;
        this.setState({
            hotel: params!.hotel,
            avaliacao_limpeza: params!.hotel.avaliacao.avaliacao_limpeza,
            avaliacao_servico: params!.hotel.avaliacao.avaliacao_servico
        });
    }

    render() {
        const { hotel } = this.state;
        const {} = this.props;

        return (
            <View>
                <StatusBar translucent backgroundColor={this.state.backgroundColor}/>
                <View style={[styles.imageContainer]}>
                    <Image source={{uri: this.state.hotel?.imagem}} style={[styles.image]}/>
                    <View style={[styles.icone]}>
                    <Icon name={'arrow-left'} color={appColors.white} size={20} 
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Icon name={'share-variant'} color={appColors.white} onPress={()=> this.onShare()} size={20} />
                    </View>
                </View>
                <View>
                    <View style={[styles.body]}>
                        <View style={[styles.secao1]}>
                            <Text style={[styles.titulo]}> {this.state.hotel?.nome} </Text>
                            <View style={{justifyContent: 'center'}}>
                            <View style={[styles.notaContainer]}>
                            <View style={[styles.nota]}>
                                <Text > {this.state.hotel?.avaliacao.avaliacao_geral} </Text>
                            </View>
                            <Text> Bom </Text>
                            </View>
                        </View>
                        </View>
                        <View style={[styles.distancia]}>
                            <Icon name={'map-marker'} size={20} />
                            <Text> {this.state.hotel?.distancia}</Text>
                        </View>
                    </View>

                    <View>
                        <Text> RECOMENDADO POR ECOMVAGO </Text>
                        <View style={[styles.oferta]}>
                            <Text> {this.state.hotel?.oferta[0].site} </Text>
                            <View style={{flexDirection: 'row'}}>
                                <View>
                                <Text> {this.state.hotel?.oferta[0].preco} </Text>
                                <Text> por noite </Text>
                                </View>
                                <Icon name={'chevron-right'} size={20} />
                                
                            </View>
                        </View>
                        <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={()=> this.setState({mostrarOferta: true, backgroundColor: '#000000aa'})}>
                            <Text> VER TODAS AS OFERTAS </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text> OPINIÃO DOS HÓSPEDES </Text>
                        <Text> avaliação </Text>
                        <Text> {this.state.hotel?.avaliacao.avaliacao_geral} </Text>
                        <Text> bom </Text>
                        <AppProgressBar 
                            quesito='Limpeza'
                            progresso={this.state.avaliacao_limpeza}
                        />
                        
                        <AppProgressBar 
                            quesito='Servico'
                            progresso={this.state.avaliacao_servico}
                        />
                    </View>
                </View>

                <Modal
                transparent={true}
                visible={this.state.mostrarOferta}
                >
                    <View style={[styles.modal]}>
                        <View style={[styles.modalInterno]}>
                            <Icon name={'close'} size={20} onPress={() => this.setState({mostrarOferta: false})} />
                            <View>
                            <FlatList
                            
                            showsVerticalScrollIndicator={false}
                            data={this.state.hotel?.oferta}
                            keyExtractor={(oferta: Oferta, index: number) => String(index)}
                            renderItem={({item}) => 
                            <View style={[styles.todaOferta]}>
                            <Text style={[styles.texto]}> {item.site} </Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View>
                                    <Text style={[styles.price, styles.color]}>R${item.preco}</Text>
                                    <Text style={[styles.color]}>por noite</Text>
                                </View>
                                <Icon name={'chevron-right'} color={'#448006'} size={20} />   
                            </View>
                        </View>
                                

                            
                            }
                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default HotelScreen;
