import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const Input = ({label, ...props}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} multiline={true} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    color: '#79737d',
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    color: '#79737d',
    marginBottom: 6,
    fontFamily: 'Ubuntu-Regular',
  },
});
