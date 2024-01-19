import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/DeliveryStack/SendSomethingScreen/Header';
import AddLocationButton from '../../Components/DeliveryStack/SendSomethingScreen/AddLocationButton';
import ContinueButton from '../../Components/DeliveryStack/SendSomethingScreen/ContinueButton';
import { useNavigation } from '@react-navigation/native';

const SendSomethingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <View style={styles.header}>
          <Text style={styles.headingText1}>Get anything picked up and delivered</Text>
          <Text style={styles.headingText2}>Our box can fit about about 3 footballs and handle 7 kgs of weight</Text>
        </View>
        <AddLocationButton title="Add pickup location" number="1" onPress={() => navigation.navigate('PickupLocation')} />
        <AddLocationButton title="Add dropoff location" number="2" />
      </View>
      <ContinueButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', 
  },
  content: {
    paddingHorizontal: 15,
  },
  header: {
    marginTop: 100,
  },
  headingText1: {
    fontWeight: 'bold',
    color:'black',
    fontSize: 22,
    marginBottom: 20,
  },
  headingText2: {
    fontSize: 13,
    marginBottom: 30,
  },
});

export default SendSomethingScreen;
