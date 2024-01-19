import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const AddLocationButton = ({ title, onPress, number }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{number}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.buttonTitle}>{title}</Text>
          <Icon name="right" size={20} color="black" />
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
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    borderColor: '#ECEFF1',
    borderWidth: 3,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  numberText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    width: '80%',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});

export default AddLocationButton;
