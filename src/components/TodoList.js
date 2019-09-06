import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

export default class TodoList extends Component {
  render() {
    return (
      <>
        <View>
          <Text style={styles.text}>
            Teste {Platform.OS === 'ios' ? 'ios' : 'android'}{' '}
          </Text>
          <Text>Outro teste</Text>
          <Text>Novo Teste</Text>
          <Text>Mais um</Text>
          <Text>Outro...</Text>
        </View>
      </>
    );
  }
}

/* estilizando diferente para cada plataforma */
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        color: '#f00',
      },
      android: {
        color: '#00f',
      },
    }),
  },
});
