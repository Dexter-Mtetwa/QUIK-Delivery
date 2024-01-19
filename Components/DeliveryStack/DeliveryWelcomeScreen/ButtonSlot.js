import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const ButtonSlot = ({ text, title, onPress, img }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.buttonImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.buttonTitle}>{title}</Text>
          <Text style={styles.buttonText}>{text}</Text>
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
    height: 100,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  buttonImage: {
    width: 40,
    height: 50,
    resizeMode: 'contain',
  },
  detailsContainer: {
    alignItems: 'flex-start',
    marginLeft: 15,
    flexWrap: 'wrap',
    width: '70%',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black',
  },
  buttonText: {
    textAlign: 'left',
    fontSize: 14,
    color: 'gray',
  },
});

export default ButtonSlot;
