import React from 'react';
import { ScrollView } from 'react-native';
import {
    Center,
    Input,
    FormControl,
    Container,
    Heading,
    Radio,
    Select,
    Box,
    Switch,
    Text,
} from 'native-base';

import styles from './DataScreenStyles';

export interface Props {}

export interface State {
    diretoria: string;
}

class DataScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            diretoria: '',
        };
    }

    onChangeDiretoria = (text: string) => {
        this.setState({
            diretoria: text,
        });
    };

    render() {
        const { diretoria } = this.state;
        return (
            <ScrollView>
                {/* a tag <FormControl> permite um "controle" dos campos de texto */}
                <FormControl isRequired>
                    <FormControl.Label marginLeft="9%" marginTop="3%">
                        Campo obrigatório:
                    </FormControl.Label>
                    <Center>
                        <Input
                            width="85%"
                            placeholder="Senha do banco"
                            placeholderTextColor="blueGray.400"
                            fontSize={18}
                        />
                    </Center>
                </FormControl>
                <FormControl isInvalid>
                    <FormControl.Label marginLeft="9%" marginTop="3%">
                        Campo inválido:
                    </FormControl.Label>
                    <Center>
                        <Input
                            width="85%"
                            placeholder="Ano de formatura"
                            placeholderTextColor="blueGray.400"
                            fontSize={18}
                        />
                    </Center>
                    <FormControl.ErrorMessage marginLeft="9%">
                        F formatura
                    </FormControl.ErrorMessage>
                </FormControl>

                <Box marginTop="7%">
                    <FormControl>
                        <FormControl.Label marginLeft="8%">
                            Selecione sua diretoria preferida
                        </FormControl.Label>
                        <Center>
                            {/* o <Select> permite criar uma lista de alternativas 
                            é necessario ter uma variável para controlar as trocas*/}
                            <Select
                                width="85%"
                                placeholder="Diretoria"
                                selectedValue={diretoria}
                                onValueChange={itemValue =>
                                    this.onChangeDiretoria(itemValue)
                                }>
                                <Select.Item
                                    label="Projetos"
                                    value="Projetos"
                                />
                                <Select.Item
                                    label="Qualidade"
                                    value="Qualita"
                                />
                                <Select.Item label="Adm-fin" value="Adm-fin" />
                                <Select.Item
                                    label="Negócios"
                                    value="Negócios"
                                />
                                <Select.Item label="DH" value="DH" />
                                <Select.Item
                                    label="Comunicação"
                                    value="Comunica"
                                />
                                <Select.Item
                                    label="Presidência"
                                    value="Presidência"
                                />
                            </Select>
                            <FormControl.HelperText>
                                (Se não escolher projetos é ban)
                            </FormControl.HelperText>
                        </Center>
                        <Text style={[styles.text]}>
                            Sua escolha: {diretoria}
                        </Text>
                    </FormControl>
                </Box>

                <Center mt="10%">
                    <Container>
                        <Heading size="lg">E aí entendeu?</Heading>
                    </Container>
                    {/* <Radio> permite que você crie várias opções selecionáveis
                    o espaçamento entre eles é definido na props "my" */}
                    <Radio.Group name="opcoes" defaultValue="0" size="md">
                        <Radio value="1" isDisabled my={1}>
                            Tendi nada
                        </Radio>
                        <Radio value="2" my={1} colorScheme="warning">
                            Tá ok
                        </Radio>
                        <Radio value="3" my={1} colorScheme="emerald">
                            Tamo grande
                        </Radio>
                    </Radio.Group>

                    <Center my="5%">
                        <Heading size="lg">Hora do nintendo switch</Heading>
                        <Switch colorScheme="emerald" size="lg" />
                    </Center>
                </Center>
            </ScrollView>
        );
    }
}

export default DataScreen;
