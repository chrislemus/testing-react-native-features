import React from "react";
import ImageDetail from "../Components/ImageDetail";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const ImageScreen = () => {
  return (
  <View>
    <Text style={styles.textStyle}>Image Screen</Text>
    <ImageDetail imageSource={require('../../assets/beach.jpg')}/>
    <ImageDetail imageSource={require('../../assets/mountain.jpg')}/>
    <ImageDetail imageSource={require('../../assets/forest.jpg')}/>
  </View>)
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 60
  }
});

export default ImageScreen;
