import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text>Hello Dashboard</Text>
          
        </View>
    );
  }

}


const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex:1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

AppRegistry.registerComponent('news', () => Dashboard);