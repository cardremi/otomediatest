import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardCategory = ({data, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
      <View style={[styles.wrapper]}>
        <Ionicons
          name={'person-circle-outline'}
          size={50}
          style={styles.tinyLogo}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{data?.email}</Text>
          <Text style={styles.title}>{data?.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 6,
    padding: 8,
    backgroundColor: 'white',
  },
  titleWrapper: {
    paddingLeft: 12,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
});
