import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";

export const Timer = ({ focusSubjet }) => {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <CountDown isPaused={!isStarted} />
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubjet}</Text>
            </View>
            <View style={styles.buttonWrapper}>

                {isStarted ? (
                    <RoundedButton title={"pause"} onPress={() => setIsStarted(false)} />
                ) : (
                    <RoundedButton title={"start"} onPress={() => setIsStarted(true)} />
                )}

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
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 0.3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

