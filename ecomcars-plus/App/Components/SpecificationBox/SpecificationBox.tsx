import React from 'react';
import {Box, Text} from 'native-base';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../Themes/appColors';

export interface Props {
    imagem: string,
    modelo: string,
    espec: string,
    descricao: string
    onPress: () => void,
}

export interface State {}

export default class SpecificationBox extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        const {modelo, espec, imagem, descricao} = this.props;
        return (
            <Box style={[styles.]}>
                
            </Box>
        );
    }
}
