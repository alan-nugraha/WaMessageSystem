import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title, onPress, isLoading, loadingText}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.container(type), isLoading && styles.disable]}
      onPress={onPress}>
      <Text style={styles.text(type)}>
        {isLoading && loadingText ? loadingText : title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#f26865',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 18,
    fontFamily: 'Ubuntu-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
  }),
  disable: {
    opacity: 0.75,
  },
});
