import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Home Screen, Whats good?</Text>
    <Button 
      title="Go To Component Demo"
      onPress={() => navigation.navigate("Components")}
    />
    <Button 
      title="Go To List Demo"
      onPress={() => navigation.navigate("List")}
    />
    <Button 
      title="Go To ImageScreen"
      onPress={() => navigation.navigate("ImageScreen")}
    />
    <Button 
      title="Go To TextScreen"
      onPress={() => navigation.navigate("TextScreen")}
    />
    <Button 
      title="Go To Box Screen"
      onPress={() => navigation.navigate("BoxScreen")}
    />

  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
