import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

export const Timer = ({ focusSubjet }) => {
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubjet}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: spacing.lg
    },
    title: {
        color: colors.white,
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

