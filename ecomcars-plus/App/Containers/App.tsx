import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Redux';
import RootContainer from './RootContainer/RootContainer';
import SplashScreen from './SplashScreen/SplashScreen';

const theme = extendTheme({
    fontConfig: {
      Metropolis: {
        100: {
          normal: 'Metropolis-Light',
          italic: 'Metropolis-LightItalic',
        },
        200: {
          normal: 'Metropolis-Light',
          italic: 'Metropolis-LightItalic',
        },
        300: {
          normal: 'Metropolis-Light',
          italic: 'Metropolis-LightItalic',
        },
        400: {
          normal: 'Metropolis-Regular',
          italic: 'Metropolis-Italic',
        },
        500: {
          normal: 'Metropolis-Medium',
        },
        600: {
          normal: 'Metropolis-Medium',
          italic: 'Metropolis-MediumItalic',
        },
        // Add more variants
        //   700: {
        //     normal: 'Metropolis-Bold',
        //   },
        //   800: {
        //     normal: 'Metropolis-Bold',
        //     italic: 'Metropolis-BoldItalic',
        //   },
        //   900: {
        //     normal: 'Metropolis-Bold',
        //     italic: 'Metropolis-BoldItalic',
        //   },
      },
    },
  
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Metropolis',
      body: 'Metropolis',
      mono: 'Metropolis',
    },
  });

const App = () => {
    return (
        <Provider store={store}>
            <NativeBaseProvider theme={theme}>
                <PersistGate loading={<SplashScreen />} persistor={persistor}>
                    <RootContainer />
                </PersistGate>
            </NativeBaseProvider>
        </Provider>
    );
};

export default App;
