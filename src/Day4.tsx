import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";

const booleanToString = (b: boolean) => {
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
};

export default function Day4() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string>("");

  const handleBoolean = () => {
    if (input === "true") {
      const value = true;
      const stringValue = booleanToString(value);

      setResult(stringValue);
    } else if (input === "false") {
      const value = false;
      const stringValue = booleanToString(value);

      setResult(stringValue);
    } else {
      setResult("Please enter true or false");
    }
  };

  return (
    <View style={Styles.container}>

      <Text style={Styles.title}>
      </Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter true or false"
        style={Styles.input}
        autoCapitalize="none"
      />

      <Pressable
        onPress={handleBoolean}
        style={Styles.button}
      >
        <Text style={Styles.buttonText}>
          Convert
        </Text>
      </Pressable>

      <Text style={Styles.result}>
        Result: {result}
      </Text>

    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: 280,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },

  button: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  result: {
    marginTop: 25,
    fontSize: 20,
  },
});
