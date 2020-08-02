import React from 'react';
import {StyleSheet, Text, View, ToastAndroid, Image} from 'react-native';
import {ILMessage} from '../../assets';
import {Button, Gap, Input} from '../../components/atoms';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {phone: '', body: '', isLoading: false};
  }

  handleSend = () => {
    const {phone, body} = this.state;
    if (!phone || !body) {
      ToastAndroid.show(
        'Kolom Phone atau Message tidak boleh kosong',
        ToastAndroid.LONG,
      );
      return;
    }
    const number = phone.substring(0, 2);
    if (number !== '62') {
      ToastAndroid.show('Nomor harus diawali 62', ToastAndroid.LONG);
      return;
    }
    this.setState({isLoading: true});

    console.log('number', number);
    axios
      .post(
        'https://eu140.chat-api.com/instance156811/sendMessage?token=cyvmxdafc3oxq5dz',
        {
          phone: this.state.phone,
          body: this.state.body,
        },
      )
      .finally(() => {
        this.setState({phone: '', body: ''});
        this.setState({isLoading: false});
      });
  };
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Welcome to{'\n'}WA Message System</Text>
        </View>
        <View style={styles.content}>
          <Input
            label="Phone"
            onChangeText={(text) => this.setState({phone: text})}
            keyboardType={'numeric'}
            value={this.state.phone}
          />
          <Gap height={10} />
          <Text style={styles.example}>Example 6285</Text>
          <Gap height={8} />
          <Input
            label="Message"
            onChangeText={(text) => this.setState({body: text})}
            value={this.state.body}
            multiline
          />
          <Gap height={30} />
          <Button
            title="Send"
            onPress={this.handleSend}
            isLoading={this.state.isLoading}
            loadingText="Loading"
          />
          <View style={styles.imageWrap}>
            <Image style={styles.image} source={ILMessage} />
          </View>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  page: {
    padding: 50,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: '#79737d',
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
  containerText: {
    paddingBottom: 100,
  },
  content: {
    marginBottom: 40,
  },
  example: {
    color: '#c5c5cb',
    fontFamily: 'Ubuntu-Regular',
  },
  image: {
    width: 420,
    resizeMode: 'contain',
    paddingVertical: 0,
    top: -350,
    left: -110,
  },
  imageWrap: {
    flex: 1,
    zIndex: -999,
    alignItems: 'flex-start',
  },
});
