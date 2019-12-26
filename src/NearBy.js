import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class NearBy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Near By</Text>
        <Button
          title="Open Place Detail"
          onPress={() => {
            this.props.navigation.navigate('PlaceDetail');
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

export default NearBy;
