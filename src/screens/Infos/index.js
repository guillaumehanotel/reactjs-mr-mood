import React from "react";
import _ from 'lodash';
import { Text, View } from 'react-native';
import {useSelector} from "react-redux";
import {MOODS_TYPE} from "@config/store"

const Infos = () => {

    const moods = useSelector(state => state.moods.moods);

    const getAverageMood = () => {
        const occurrencesByMoods = _.countBy(moods.map(mood => mood.mood))
        const occurrencesByMoodsValues = Object.values(occurrencesByMoods)
        const indexOfMaxOccurence = occurrencesByMoodsValues.indexOf(Math.max(...occurrencesByMoodsValues))
        const moodKeyMaxOccurence = parseInt(Object.keys(occurrencesByMoods)[indexOfMaxOccurence])
        const averageMood = MOODS_TYPE.filter(MOOD_TYPE => MOOD_TYPE.mood === moodKeyMaxOccurence)[0]
        return averageMood ? averageMood.title : "Pas assez de données";
    }

    return (
        <View>
            <Text>Nombre d'humeur : {moods.length}</Text>
            <Text>Humeur global : {getAverageMood()}</Text>
        </View>
    );
}


export default Infos;
