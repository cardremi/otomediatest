import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const FloatingButton = ({onPress, testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#a7d131',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    paddingBottom: 4,
    paddingLeft: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
