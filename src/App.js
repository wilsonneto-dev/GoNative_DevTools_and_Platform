import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TodoList from '~/components/TodoList';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

export default class App extends Component {
  render() {
    console.tron.log('here we gooo!');

    return (
      <>
        <TodoList />
      </>
    );

    /*
    return (
      <>
        <View style={styles.container}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
});
