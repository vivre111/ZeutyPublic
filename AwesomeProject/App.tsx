import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tw } from 'react-native-tailwindcss';
export default function App() {
  const [text, setText] = useState<string>('a')
  return (
    <View style={styles.container}>
      <Text style={tw.text2xl}>Open up App.js to start working on your a</Text>
      <Text style={tw.text3xl}>Op</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
