import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Center, Box, Container, Heading, Text, Checkbox } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './TextScreenStyles';

export interface Props {
    navigation: NavigationProp<any>;
}

export interface State {}

class TextScreen extends React.Component<Props, State> {
    render() {
        return (
            <ScrollView>
                <Center style={{ marginVertical: '5%' }}>
                    {/* tag <Center> centraliza todo o conteudo*/}

                    <View style={[styles.margem]}>
                        <Text> Texto Centralizado </Text>
                    </View>

                    {/*
                        Delimita uma "caixa", similar a tag <div> em HTML
                        Aqui tambem foi usado o esquema de cores da biblioteca
                    */}
                    <Box bg="primary.400" p={2} rounded="lg">
                        isso é uma caixa
                    </Box>

                    {/* tag de texto para títulos/headers */}
                    <Heading style={[styles.margem]}>Isso é um titulo</Heading>

                    {/*Delimita o conteúdo dentro de um "container", mantendo a fluidez */}
                    <Container>
                        <Center>
                            <Heading color="red.600" style={[styles.margem]}>
                                LOREM IPSUM EM VERMELHO
                            </Heading>

                            <View>
                                {/*tag <Text> do ***NATIVE-BASE***, possui props para a formatação de texto*/}
                                <Text strikeThrough>
                                    fui riscado alguem me ajude
                                </Text>

                                <Text>
                                    <Text bold>Lorem Ipsum</Text>{' '}
                                    <Text italic>
                                        is simply dummy text of the printing and
                                        typesetting industry.
                                    </Text>{' '}
                                    Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but
                                    also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum
                                </Text>
                            </View>
                        </Center>
                    </Container>

                    {/* Cria uma checkbox*/}
                    <Checkbox
                        style={[styles.margem]}
                        value="1"
                        accessibilityLabel="checkbox laranja, compreendeste?"
                        colorScheme="orange">
                        Compreendeste?
                    </Checkbox>
                </Center>
            </ScrollView>
        );
    }
}

export default TextScreen;
