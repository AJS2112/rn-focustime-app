import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/colors';
export default function App() {
  const [focusSubjet, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubjet ? (
        <Text style={{ color: colors.white }}>{focusSubjet}</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )
      }
      <Text>{focusSubjet}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
