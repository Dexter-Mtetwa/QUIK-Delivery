import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/DeliveryStack/DeliveryWelcomeScreen/Header';
import ButtonSlot from '../../Components/DeliveryStack/DeliveryWelcomeScreen/ButtonSlot';
import { useNavigation } from '@react-navigation/native';

const DeliveryWelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.headingText}>What would you like to do?</Text>
        <ButtonSlot text="We'll pick up and drop off your items" title="Send something" img={require('../../assets/images/Delivery/cardboard-box.png')} onPress={() => navigation.navigate('SendSomething')}/>
        <ButtonSlot text="We'll purchase and deliver whatever you need" title="Buy something" img={require('../../assets/images/Delivery/green-shopping-bag.png')} onPress={() => navigation.navigate('BuySomething')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1', 
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default DeliveryWelcomeScreen;
