import React from 'react';
import {Box, Image, Text, Circle, HStack, View} from 'native-base';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../Themes/appColors';
export interface Props {
    modelo: string,
    cor: string,
    imagem: string,
    titulo: string
    onPress: () => void,
}

export interface State {}

export default class CarCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        const {modelo, cor, imagem, titulo} = this.props;
        return (
            <View mb='5%'>
                <Box bg={cor} my="6%" borderRadius="19px" w="80%" p="5%" alignSelf="center">
                    <View pl="4%" pb="11%">
                        <Text color="white" fontSize='2xl'> 
                            {modelo}
                        </Text>
                        <Text color='white' fontSize="lg"> 
                            {titulo}
                        </Text>
                    </View>
                </Box>
                
                <HStack ml="15%" mt='23%' position='absolute' justifyContent="space-between">
                    <Image source={{uri: imagem}} alt="imagem do carro" resizeMode='center' w={hp('20')} h={hp("15")}/>
                    <View ml='22%' mt='14%'>
                        <Circle backgroundColor='white' size="xs">
                            <Icon name={'arrow-right'} size={27} color={appColors.gold} onPress={this.props.onPress}/>
                        </Circle>
                    </View>
                </HStack>
            </View>
            
        );
    }
}
