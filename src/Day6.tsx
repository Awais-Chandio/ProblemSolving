import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";

const ArrayProduct = (arrayInput: number[]) => {
  let product = 1;

  for (let i = 0; i < arrayInput.length; i++) {
    product = product * arrayInput[i];
  }

  return product;
};

export default function Day6() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number>();

  const handleFunction = () => {
    const numbers = input.split(" ").map(Number);

    setResult(ArrayProduct(numbers));
  };

  return (
    <View style={Styles.container}>
      <Text>Day 6 - Array Product</Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter: 1 2 4 6"
        style={Styles.input}
      />

      <Pressable onPress={handleFunction}>
        <Text>Calculate Product</Text>
      </Pressable>

      <Text>Result: {result}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    width: 250,
    padding: 10,
    margin: 20,
  },
});