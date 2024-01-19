import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DestinationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Current Location</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.changeLocationText}>Change Location</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  changeLocationText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default DestinationScreen;
