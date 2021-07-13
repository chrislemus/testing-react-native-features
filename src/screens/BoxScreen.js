import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";



const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: 'black',
    //alignItems: 'flex-end',
    //flexDirection: 'row',
    justifyContent: 'space-around',
    height: 200
  },
  textStyle: {
    borderWidth: 2,
    borderColor: 'red'
  },

});

export default BoxScreen