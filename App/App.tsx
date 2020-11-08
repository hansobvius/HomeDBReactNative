import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Screens/home/Home'
import Detail from './Screens/detail/Detail'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from "./overmind/index"

const stack = createStackNavigator()

const overmind = createOvermind(config);

const App = () => {
  return (
    <> 
      <Provider value={overmind}>
        <NavigationContainer>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen
              name="Home"
              component={Home}
              options={{ title: "MovieDB" }}
            />
            <stack.Screen
              name="Detail"
              component={Detail}
              options={{ title: "MovieDB" }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
