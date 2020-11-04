import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from "react";

const Mood = (props) => {

    const {mood, deleteMoodFunction} = props;

    return (
        <Pressable
            onLongPress={() => deleteMoodFunction(mood)}
            style={[styles.mood,
            {backgroundColor: mood.color},
            {height: 20 + mood.mood * 15 + '%'}]}>
            <Text style={styles.moodText}>{mood.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    mood: {
        flex: 1,
        justifyContent: "center",
        width: 72,
    },
    moodText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    },
});

export default Mood;
