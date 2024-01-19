import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>QUIK</Text>
      </View>
      <View style={styles.backButtonDummy}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 40,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 1,
    borderColor: '#8CA1A5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FAFAFA',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButtonDummy: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'transparent',
  }
});

export default Header;
