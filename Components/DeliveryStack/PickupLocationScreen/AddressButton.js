import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const AddressButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Saved</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.manageButtonText}>Manage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.newAddressButtonText}>New address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 15,
  },
  headingText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 30,
  },
  manageButtonText: {
    color: '#0277BD'
  },
  newAddressButtonText: {
    color: '#0277BD'
  },
});

export default AddressButton;
