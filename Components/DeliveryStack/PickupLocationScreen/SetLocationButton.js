import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const SetLocationButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
      >
        <View style={styles.iconContainer}>
          <Icon name="location-crosshairs" size={20} color="#616161" />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.buttonTitle}>Set location on map</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 70,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
    marginLeft: 10,
    borderRadius: 100,
    width: 35,
    height: 35,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    width: '80%',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});

export default SetLocationButton;
