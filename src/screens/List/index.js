import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
import React, {useEffect, useState} from "react";
import {Icon} from 'react-native-elements'
import {MOODS_TYPE, getItems, setItems} from "@config/store"
import Mood from "@components/Mood";

const List = () => {

    const [moods, setMoods] = useState([]);
    const [displayAdd, setDisplayAdd] = useState(false);
    const [scroller, setScroller] = useState(React.createRef());

    useEffect(() => {
        const fetchMoods = async () => {
            let storedMoods = await getItems("moods");
            if (storedMoods === null) {
                storedMoods = []
            }
            setMoods(storedMoods)
        }
        fetchMoods();
    }, [])

    const addMood = (mood_type) => {
        const updatedMoods = [...moods, {
            id: Math.floor(Math.random() * 999),
            title: mood_type.title,
            mood: mood_type.mood,
            color: mood_type.color,
        }]
        setItems("moods", updatedMoods);
        setMoods(updatedMoods);
        setTimeout(() => {
            scroller.scrollTo({x: 1000, y: 0, animated: true})
        }, 100)
    }

    const deleteMood = (mood) => {
        const updatedMoods = moods.filter(item => item.id !== mood.id)
        setItems("moods", updatedMoods);
        setMoods(updatedMoods);
    }

    const resetMoods = () => {
        setMoods([])
        scroller.scrollTo({x: 0, y: 0, animated: false})
        AsyncStorage.removeItem("moods")
    }

    const _getBgColorStyle = (mood) => {
        const colors = ["#E270DF", "#EC5689", "#6ad8f9", "#ADCA3E", "#FAD94C"];
        return colors[mood - 1];
    }

    return (
        <View style={styles.wrapper}>
            <ScrollView horizontal={true} ref={(scroller) => {
                setScroller(scroller)
            }}>
                <View style={styles.moods}>
                    {moods.map((mood) => (
                        <Mood
                            mood={mood}
                            deleteMoodFunction={deleteMood}
                            key={mood.id.toString()}
                        >{mood.title}</Mood>
                    ))}
                </View>
            </ScrollView>
            {displayAdd && (
                <View style={styles.moodButtonList}>
                    {displayAdd && MOODS_TYPE.map((mood_type) => (
                        <TouchableOpacity
                            style={[styles.moodButton,
                                {left: mood_type.id * 50},
                                {backgroundColor: _getBgColorStyle(mood_type.mood)},
                            ]}
                            key={mood_type.id}
                            onPress={() => addMood(mood_type)}
                        >
                            <Image style={styles.moodButtonImage} source={mood_type.imagePath}/>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={() => resetMoods()}>
                        <Icon name="refresh" color={"white"}/>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setDisplayAdd(!displayAdd)}>
                <Text style={styles.addButtonText}>{displayAdd ? "-" : "+"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
    },
    moodButtonList: {
        flexDirection: "row",
        justifyContent: "center"
    },
    moodButton: {
        position: "absolute",
        bottom: 65,
        width: 45,
        height: 45,
        backgroundColor: '#1359ce',
        borderRadius: 50,
        borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    moodButtonText: {
        fontWeight: "bold",
        fontSize: 18
    },
    moodButtonImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        overflow: "hidden",
    },
    moods: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    addButton: {
        color: 'white',
        position: "absolute",
        bottom: '1%',
        left: '42%',
        width: 50,
        height: 50,
        backgroundColor: '#3fcb08',
        borderRadius: 50,
        flex: 1,
        alignItems: "center"
    },
    addButtonText: {
        color: 'white',
        fontSize: 45,
        position: "relative",
        bottom: 8
    },
    resetButton: {
        position: "absolute",
        bottom: 8,
        left: '22%',
        width: 45,
        height: 45,
        backgroundColor: '#1359ce',
        borderRadius: 50,
        flex: 1,
        justifyContent: "center"
    }
})

export default List
