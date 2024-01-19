import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <TextInput placeholder='Search pickup location' style={styles.textInput}/>
        </View>
      </View>
      <View style={styles.bottomLineBar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  content: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  titleContainer: {
  },
  textInput: {
    fontSize: 18,
  },
  bottomLineBar: {
    width: '100%',
    height: 2,
    backgroundColor: '#ECEFF1',
    ...Platform.select({
      ios: {
        shadowColor: '#ECEFF1',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 0.3,
      },
      android: {
        elevation: 0.3,
      },
    }),
  }
});

export default Header;
