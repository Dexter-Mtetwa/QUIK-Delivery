import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeliveryWelcomeScreen from './DeliveryWelcomeScreen';
import SendSomethingScreen from './SendSomethingScreen';
import BuySomethingScreen from './BuySomethingScreen';
import PickupLocationScreen from './PickupLocationScreen';

const Stack = createStackNavigator();

const CarRentalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeliveryWelcome" component={DeliveryWelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SendSomething" component={SendSomethingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PickupLocation" component={PickupLocationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BuySomething" component={BuySomethingScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CarRentalStack;
