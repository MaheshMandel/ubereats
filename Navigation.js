import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Home from './Screens/Home';
import RestaurantDetail from './Screens/RestaurantDetail';
import OrderCompleted from './Screens/OrderCompleted';
import Loading from './Screens/Loading';
import { store } from './app/store';


export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Loading' screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Loading" component={Loading} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}