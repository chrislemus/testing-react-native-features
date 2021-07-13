import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  return <View><Text style={styles.textStyle}>Tis is the Comp</Text></View>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 60
  }
})

export default ComponentsScreen