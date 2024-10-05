import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Route } from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import FlashMessage from 'react-native-flash-message';


function App(): React.JSX.Element {
 
  return (
    <Provider store={store}>
        <NavigationContainer>
      <Route />
      <FlashMessage position={'top'} />
    </NavigationContainer>
    </Provider>
  
  );
}

export default App;
