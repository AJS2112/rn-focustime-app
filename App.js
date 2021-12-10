import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';

export default function App() {
  const [focusSubjet, setFocusSubject] = useState('Studyng');

  return (
    <View style={styles.container}>
      {focusSubjet ? (
        <Timer focusSubjet={focusSubjet} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )
      }
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
