import {Pressable, StyleSheet, Text} from 'react-native';
import React from "react";
import {useDispatch} from "react-redux";


const Mood = (props) => {

    const {mood, deleteMoodFunction} = props;
    const dispatch = useDispatch();

    return (
        <Pressable
            onLongPress={() => dispatch(deleteMoodFunction(mood))}
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
