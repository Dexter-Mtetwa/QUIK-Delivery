import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/DeliveryStack/PickupLocationScreen/Header';
import SetLocationButton from '../../Components/DeliveryStack/PickupLocationScreen/SetLocationButton';
import AddressButton from '../../Components/DeliveryStack/PickupLocationScreen/AddressButton';

const PickupLocationScreen = () => {

  return (
    <View style={styles.container}>
      <Header />
      <SetLocationButton />
      <View style={styles.content}>
        <AddressButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', 
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default PickupLocationScreen;
