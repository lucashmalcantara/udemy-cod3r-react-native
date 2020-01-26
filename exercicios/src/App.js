import React from 'react'
import Simples from './componentes/Simples'

// Importamos dois componentes que fazem parte da biblioteca react-native
import { View, Text, StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexível!' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})