import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          title="Go To Products"
          onPress={() => {
            this.props.navigation.navigate('Products');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
