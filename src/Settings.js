import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
        <Button
          title="Category"
          onPress={() => this.props.navigation.navigate('Categories')}
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

export default Settings;
