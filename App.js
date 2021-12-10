import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubjet, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubjet ? (
        null
      ) : (
        <Focus />
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
