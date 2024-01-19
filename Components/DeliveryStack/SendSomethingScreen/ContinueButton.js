import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ContinueButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bar}></View>
      <View style={styles.content}>
        <View style={styles.instructionsContainer}>
          <View style={styles.iconContainer}>
            <Icon name="pencil" size={20} color="black" />
          </View>
          <View style={styles.instructionsWrapper}>
            <Text style={styles.headingText}>instructions</Text>
            <TextInput style={styles.textInput} placeholder="Add instructions" />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          disabled={true}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    height: 10,
    backgroundColor: '#ECEFF1',
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
  instructionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 50,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  instructionsWrapper: {
    justifyContent: 'space-around',
    height: 40,
    marginTop: 10,
  },
  headingText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  textInput: {
    fontSize: 12,
  },
  button: {
    width: '100%',
    height: 55,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
});

export default ContinueButton;
