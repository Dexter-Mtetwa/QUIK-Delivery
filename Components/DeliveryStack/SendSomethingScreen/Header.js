import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="close" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  closeButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpText: {
    fontSize: 15,
  },
});

export default Header;
