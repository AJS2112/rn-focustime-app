import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { fonstSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';


const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;


export const CountDown = ({
    minutes = 20,
    isPaused,
}) => {
    const interval = React.useRef(null);

    const countDown = (time) => {
        setMillis((time) => {
            if (time === 0) {
                return time;
            }
            const timeLeft = time - 1000;
            return timeLeft;
        })
    }

    useEffect(() => {
        if (isPaused) {
            return;
        }

        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current);
    }, [isPaused])

    const [milis, setMillis] = useState(minutesToMillis(minutes));



    const minute = Math.floor(milis / 1000 / 60) % 60;
    const seconds = Math.floor(milis / 1000) % 60;

    return (
        <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: fonstSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94,132,226,0.3)'
    }
});

