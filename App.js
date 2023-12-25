import {View, Text, StyleSheet } from 'react-native';
import StyleNative from './components/StyleNative';

export default function App() {
  return (
    <View style={styles.container}>
      <StyleNative />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60}
})