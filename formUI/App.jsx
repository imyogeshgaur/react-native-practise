import React from 'react';
import { TextInput} from 'react-native-paper';
import { Button,View,StyleSheet} from 'react-native'
import AppBar from './Components/AppBar';

const App = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <TextInput
        label="Name"
        placeholder="Enter your First Name"
      />
      <TextInput
        label="Email"
        placeholder="Enter your Email Address"
      />
      <TextInput
        label="Phone Number"
        placeholder="Enter your Phone Number"
      />
      <TextInput
        label="Message"
        placeholder="Enter your Message"
      />
      <Button title="click me" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;