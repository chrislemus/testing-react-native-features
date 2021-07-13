import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";



const TextScreen = () => {
  const [input, setInput] = useState('initialState')
  return (
    <View>
      <Text>{input}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 15,
    borderColor: 'black'
  }
});

export default TextScreen