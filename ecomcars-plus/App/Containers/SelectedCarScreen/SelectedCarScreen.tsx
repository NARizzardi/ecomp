import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import appStyles from '../../Themes/appStyles';
import appColors from '../../Themes/appColors';
import { Especificacoes } from '../../Models/Especificacoes';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { NavigationProp, Route } from '@react-navigation/native';
import { View, Image, Text, FlatList, Box, HStack, VStack, Center, Button, ScrollView } from 'native-base';
import { position } from 'styled-system';

export interface Props {
    navigation: NavigationProp<any>;
    route: Route<any>;
    flatListRef: any;
 }

export interface State {
    imagem: [],
    modelo: string,
    specs: Especificacoes | null
    descricao: string,
    diaria: number,
}

class SelectedCarScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state ={
            imagem: [],
            modelo: "",
            specs: null,
            descricao: "",
            diaria: 0
        }
    }

    componentDidMount(){
        const params: any = this.props.route.params;  
        this.setState({
            imagem: params!.car.imagens,
            modelo: params!.car.modelo,
            specs: params!.car.especificacoes,
            descricao: params!.car.descricao,
            diaria: params!.car.diaria
        })
    }
    decreaseIndex(){
    }

    increaseIndex(){
    }
    
    render() {
        return (
            <View flex={1} bgColor={"#e5e5e5"}style={[appStyles.centerView]}>
                {/* <SelectCar /> */}
                <ScrollView>
                <View>
                    <View mt={"5%"} justifyContent="center" bgColor={"white"} style={{borderRadius: 23, borderWidth: 4, borderColor: appColors.gold}}>
                        <HStack w={"95%"} style={{position: "absolute"}} justifyContent="space-between" pl={"5%"}>
                            <View>
                                <Icon size={40} name={"chevron-left"} color={appColors.gold} onPress={this.decreaseIndex()}/>
                            </View>
                            <View>
                                <Icon size={40} name={"chevron-right"} color={appColors.gold} onPress={this.increaseIndex()}/>
                            </View>
                        </HStack>
                        <FlatList               
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => String(index)}
                            data={this.state.imagem}
                            renderItem={({item}) =>{
                            return(
                            <Center w={wp('100%')} h={hp("25%")} alignSelf="center">
                                <Image source={{uri:item}} alt="imagem do carro" resizeMode='center' w={wp('60%')} h={hp("18%")}/>
                            </Center>)
                            }}
                                
                        />
                        <View pb={hp("1%")}>
                            <Text ml="7.5%" fontSize='xl'>
                                {this.state.modelo}
                            </Text>
                        </View>
                    </View>
                
                    <View >
                        <Text mt="5%" ml="7.5%" fontSize='xl'>
                            Especificações
                        </Text>
                        <HStack justifyContent="space-evenly">
                            <Box bgColor={'white'} my="3%" borderRadius="19px" w={wp("30%")} p="3%" alignItems="center"> 
                                <Icon
                                    name={"car"}
                                    size={20}
                                    color={appColors.gold}
                                /> 
                                <Text>
                                    {this.state.specs?.categoria}
                                </Text>
                            </Box>

                            <Box bgColor={'white'} my="3%" borderRadius="19px" w={wp("30%")} p="3%" alignItems="center">
                                <Icon
                                    name={"car-shift-pattern"}
                                    size={20}
                                    color={appColors.gold}
                                /> 
                                <Text> 
                                    {this.state.specs?.transmissao}
                                </Text> 
                            </Box>
                        </HStack>
                    
                        <HStack justifyContent="space-evenly">
                            <Box bgColor={'white'} my="3%" borderRadius="19px" w={wp("30%")} p="3%" alignItems="center"> 
                                <Icon
                                    name={"engine"}
                                    size={20}
                                    color={appColors.gold}
                                /> 
                                <Text> 
                                    {this.state.specs?.motor}
                                </Text>
                            </Box>

                            <Box bgColor={'white'} my="3%" borderRadius="19px" w={wp("30%")} p="3%" alignItems="center"> 
                                <Icon
                                    name={"gas-station"}
                                    size={20}
                                    color={appColors.gold}
                                    />
                                <Text>  
                                    {this.state.specs?.combustivel}
                                </Text>
                            
                            </Box>    
                        </HStack>
                    </View>
                
                    <Text ml="7.5%" fontSize='xl'>
                        Descrição
                    </Text>
                    <Box bgColor={'white'} my="2%" borderRadius="19px" w="85%" p="5%" alignSelf="center">
                        <Text>
                            {this.state.descricao}
                        </Text>
                    </Box>
                </View>
                <View h={"10%"} mt={"5%"} justifyContent="center" bgColor={"white"} style={{borderRadius: 23, borderWidth: 5, borderBottomWidth: 0, borderBottomEndRadius: 0, borderBottomStartRadius: 0, borderColor: appColors.gold}}>
                    <HStack justifyContent="space-around">
                        <View pl={"5%"} justifyContent="center" w={"40%"}>
                            <Text style={{fontSize: 20}}><Text style={{fontSize: 20, fontWeight: "bold"}}>R${this.state.diaria}</Text>/dia</Text>
                        </View>
                        <View w={"50%"} justifyContent="center" alignItems="center">
                            <Button backgroundColor={"#3393AE"} w={"80%"} h={"70%"} rounded={20} _text={{
                                fontSize: wp('5'),
                                fontWeight: 'bold'
                            }}>Reservar</Button>
                        </View>
                    </HStack>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default SelectedCarScreen;
