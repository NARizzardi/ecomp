import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, Modal, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styles from './SettingsScreenStyles';
import appImages from '../../Themes/appImages';
import AppButton from '../../Components/AppButton/AppButton';
import AppFakeButton from '../../Components/AppFakeButton/AppFakeButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../Themes/appColors';

export interface Props {
    navigation: NavigationProp<any>;
    
}

export interface State {
    showLanguage: boolean,
    showCurrency: boolean,
    showUnit: boolean,
    share: boolean,
    informacoes: boolean
    idioma: string,
    currency: string,
    unit: string,
    associado: string

}

class SettingsScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            showLanguage: false,
            showCurrency: false,
            showUnit: false,
            share: false,
            informacoes: true,
            associado: 'Torne-se um associado',
            idioma: 'Português, Brasil',
            currency: 'BRL - R$',
            unit: 'Sistema métrico (km)'
        };        
    };

    onButtonPress = () => {
        this.setState ({associado: "Associado!"})
    };

    changeLanguage = (idioma: string, novoIdioma: string) => {
        this.setState ({showLanguage: false})
        this.setState ({idioma: novoIdioma})
    };

    changeCurrency = (currency: string, novaMoeda: string) => {
        this.setState ({showCurrency: false})
        this.setState ({currency: novaMoeda})
    };

    changeUnit = (unit: string, novoSistema: string) => {
        this.setState ({showUnit: false})
        this.setState ({unit: novoSistema})
    };
    
    render() {
        const { showLanguage, showCurrency, showUnit, idioma, currency, unit } = this.state;
        const { } = this.props;

        return ( 
            <KeyboardAvoidingView style={{backgroundColor: "#ebecee", height: ('100%')}}>
                <View style={[styles.imagemView]}>
                    <Image style= {[styles.imagem]} source={appImages.ecomvago}/>
                </View>
                <View style={{ margin: 20}}>
                    <Text style={[styles.chamada]}> Associados do Ecomvago premium têm acesso a tarifas especiais. Quer aproveitar também? </Text>
                    <View style={[styles.botao]}>
                        <AppButton
                        text={this.state.associado}
                        onPress={() => this.onButtonPress()}
                        />
                    </View>
                </View>
                <View style={[styles.settings]}>
                    <View>
                        <TouchableOpacity 
                        style={[styles.espacamentoMenor]}
                        onPress={() => this.setState({showLanguage: true})}>
                            <Text style={[styles.titulo]}> Idioma </Text>
                            <Text style={[styles.subtitulo]}> {this.state.idioma} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.espacamentoMenor]}
                        onPress={() => this.setState({showCurrency: true})}>
                            <Text style={[styles.titulo]}> Moeda </Text>
                            <Text style={[styles.subtitulo]}> {this.state.currency} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.espacamentoMenor]}
                        onPress={() => this.setState({showUnit: true})}>
                            <Text style={[styles.titulo]}> Unidade de distância </Text>
                            <Text style={[styles.subtitulo]}> {this.state.unit} </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingTop:('3%')}}> 
                        <TouchableOpacity style={[styles.espacamento]}
                        onPress={() => this.setState({share: true})}>
                            <Text style={[styles.titulo]}> Compartilhar </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.espacamento]}
                        onPress={() => this.setState({informacoes: true})}>
                            <Text style={[styles.titulo]}> Informações legais </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.espacamento]}>
                            <Text style={[styles.titulo]}> Sair </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    transparent={true}
                    visible={this.state.showLanguage}>
                    <View style={{flex: 1, backgroundColor: '#000000aa', paddingTop: 250}}>
                        <View style={{backgroundColor: '#ffffff', margin: 50,  borderRadius: 10}}>
                        <Icon name={"close"} size={20}
                            style={{paddingRight: 20, paddingTop: 20,  textAlign: 'right'}}
                            onPress={() => this.changeLanguage(this.state.idioma, this.state.idioma)}/>
                            <View style={{paddingHorizontal: 20 }}> 
                                <AppFakeButton 
                                text= "Português, Brasil"
                                onPress={() => this.changeLanguage(this.state.idioma, "Português, Brasil")}
                                />
                            </View>
                            <View style={{padding: 20 }}> 
                                <AppFakeButton 
                                text= "Inglês"
                                onPress={() => this.changeLanguage(this.state.idioma, "Inglês")}/>
                            </View>
                        </View>
                    </View>                                    
                </Modal>

                <Modal
                    transparent={true}
                    visible={this.state.showCurrency}>
                    <View style={{flex: 1, backgroundColor: '#000000aa', paddingTop: 250}}>
                        <View style={{backgroundColor: '#ffffff', margin: 50,  borderRadius: 10}}>
                        <Icon name={"close"} size={20}
                            style={{paddingRight: 20, paddingTop: 20,  textAlign: 'right'}}
                            onPress={() => this.changeCurrency(this.state.currency, this.state.currency)}/>
                            <View style={{paddingHorizontal: 20 }}> 
                                <AppFakeButton 
                                text= "BRL - R$"
                                onPress={() => this.changeCurrency(this.state.currency, "BRL - R$")}
                                />
                            </View>
                            <View style={{padding: 20 }}> 
                                <AppFakeButton 
                                text= "US - $"
                                onPress={() => this.changeCurrency(this.state.currency, "US - $")}/>
                            </View>
                        </View>
                    </View>                                    
                </Modal>

                <Modal
                    transparent={true}
                    visible={this.state.showUnit}>
                    <View style={{flex: 1, backgroundColor: '#000000aa', paddingTop: 250}}>
                        <View style={{backgroundColor: '#ffffff', margin: 50, borderRadius: 10}}>
                            <Icon name={"close"} size={20}
                            style={{paddingRight: 20, paddingTop: 20,  textAlign: 'right'}}
                            onPress={() => this.changeUnit(this.state.unit, this.state.unit)}/>
                            <View style={{paddingHorizontal: 20 }}> 
                                <AppFakeButton 
                                text= "Sistema métrico (km)"
                                onPress={() => this.changeUnit(this.state.unit, "Sistema métrico (km)")}
                                />
                            </View>
                            <View style={{padding: 20 }}> 
                                <AppFakeButton 
                                text= "Sistema imperial (mi)"
                                onPress={() => this.changeUnit(this.state.unit, "Sistema imperial (mi)")}/>
                            </View>
                        </View>
                    </View>                                    
                </Modal>
                
                <Modal
                    transparent={true}
                    visible={this.state.share}>
                    <View style={{flex: 1, backgroundColor: '#000000aa', paddingTop: 250}}>
                        <View style={{backgroundColor: '#ffffff', margin: 50, paddingBottom: 10, borderRadius: 10}}>
                            <Icon name={"close"} size={20}
                            style={{paddingRight: 5, paddingTop: 5,  textAlign: 'right'}}
                            onPress={() => this.setState({share: false})}/>
                            <View style={{paddingHorizontal: 20 }}> 
                                <Text style={[styles.titulo, {textAlign: 'center'}]}> Compartilhe a palavra do React-Native com todos amém </Text>
                            </View>
                        </View>
                    </View>                                    
                </Modal>

                <Modal
                    transparent={true}
                    visible={this.state.informacoes}>
                    <View style={{flex: 1, backgroundColor: '#000000aa', paddingTop: 250}}>
                        <View style={{backgroundColor: '#ffffff', margin: 50, paddingBottom:10, borderRadius: 10}}>
                            <Icon name={"close"} size={20}
                            style={{paddingRight: 5, paddingTop: 5,  textAlign: 'right'}}
                            onPress={() => this.setState({informacoes: false})}/>
                            <View style={{paddingHorizontal: 20 }}> 
                                <Text style={[styles.titulo, {textAlign: 'center'}]}> Este aplicativo foi utilizado para a 1ª capacitação mobile da Ecomp 
                                    de 2021, sem fins lucrativos. Toda e qualquer semelhança com outros 
                                    aplicativos é mera coincidência  </Text>
                            </View>
                        </View>
                    </View>                                    
                </Modal>

            </KeyboardAvoidingView>
          );
    }
}


export default SettingsScreen;
