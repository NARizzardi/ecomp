import React from 'react';
import styles from './MapaStyles';
import { Text, View } from 'react-native';
import reactNativeConfig from 'react-native.config';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export interface Props {}

export interface State {}

const marker = [
    {
        title: 'ibis Curitiba Batel',
        coordinate: { longitude: -49.2821894, latitude: -25.4381616 },
        description: 'Hotel muito confortavel',
    },
    {
        title: 'Slim Curitiba',
        coordinate: { longitude: -49.2409197, latitude: -25.4573831 },
        description: 'Aqui o colchao é fofinho',
    },
    {
        title: 'Nacional Inn Curitiba Estação',
        coordinate: { longitude: -49.2700186, latitude: -25.4373406 },
        description: 'A vezes tem barata ',
    },
    {
        title: 'Lira Hotel',
        coordinate: { longitude: -49.2523166, latitude: -25.4381616 },
        description: 'Esse é caro',
    },
    {
        title: 'Palácio Tangará São Paulo',
        coordinate: { longitude: -46.7248656, latitude: -23.6319961 },
        description: 'Tangará',
    },
    {
        title: 'Hilton São Paulo Morumbi',
        coordinate: { longitude: -46.6994159, latitude: -23.6098837 },
        description: 'Hilton Morumbi',
    },
    {
        title: 'Bourbon Convention Ibirapuera',
        coordinate: { longitude: -46.6687987, latitude: -23.6085638 },
        description: 'Bourbon',
    },
];

export default class Mapa extends React.Component {
    render() {
        return (
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={[styles.map]}
                    region={{
                        latitude: -25.44985706794824,
                        longitude: -49.23007861842077,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021,
                    }}>
                    {marker.map((marker, index) => (
                        <Marker
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.description}
                            key={index}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}
