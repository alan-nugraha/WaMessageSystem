import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILHome} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <View style={styles.containerText}>
        <Text style={styles.title}>WA Message System</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={ILHome} />
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Ubuntu-Regular',
    color: '#112340',
    textAlign: 'center',
  },
  image: {
    width: 420,
    resizeMode: 'contain',
    paddingVertical: 0,
    top: -283,
    left: -110,
  },
  imageWrap: {
    flex: 1,
    zIndex: -999,
    alignItems: 'flex-start',
  },
  content: {
    marginBottom: 40,
  },
});
