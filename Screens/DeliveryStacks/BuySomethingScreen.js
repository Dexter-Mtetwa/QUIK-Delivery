import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/DeliveryStack/SendSomethingScreen/Header';
import AddLocationButton from '../../Components/DeliveryStack/SendSomethingScreen/AddLocationButton';

const BuySomethingScreen = () => {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headingText1}>Get anything picked up and delivered</Text>
          <Text style={styles.headingText2}>Our box can fit about about 3 footballs and handle 7 kgs of weight</Text>
        </View>
        <AddLocationButton title="Add pickup location" number="1" />
        <AddLocationButton title="Add dropoff location" number="2" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ECEFF1', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headingText1: {
    fontWeight: 'bold',
    color:'black',
    fontSize: 20,
    marginBottom: 5,
  },
  headingText2: {
    fontSize: 13,
    marginBottom: 10,
  },
});

export default BuySomethingScreen;
