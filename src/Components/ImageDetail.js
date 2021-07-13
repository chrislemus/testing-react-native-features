import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'


const ImageDetail = ({imageSource}) => {
  return (
    <View>
      <Image source={imageSource}/>
      <Text style={styles.textStyle}>Image Title</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
})

export default ImageDetail