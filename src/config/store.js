import AsyncStorage from "@react-native-community/async-storage";
import Images from '../../assets/Images';


const getItems = async (key) => {
    try {
        const values = await AsyncStorage.getItem(key);
        return JSON.parse(values)
    } catch (e) {
        console.log("ERROR STORE.JS getItems - ", e.toString())
    }
}

const setItems = async (key, values) => {
    try {
        const jsonValues = JSON.stringify(values);
        await AsyncStorage.setItem(key, jsonValues);
    } catch (e) {
        console.log("ERROR STORE setItems - ", e.toString())
    }
}

let MOODS = [
    {
        id: 1,
        mood: 5,
        title: "Parfait",
    },
    {
        id: 3,
        mood: 3,
        title: "Normal",
    },
    {
        id: 5,
        mood: 1,
        title: "Dépressif",
    }
]
let MOODS_TYPE = [
    {
        id: 1,
        mood: 5,
        title: "Parfait",
        smiley: ":D",
        imagePath: Images.mood5,
        color: "#FAD94C"
    },
    {
        id: 2,
        mood: 4,
        title: "Cool",
        smiley: ":)",
        imagePath: Images.mood4,
        color: "#ADCA3E"
    },
    {
        id: 3,
        mood: 3,
        title: "Normal",
        smiley: ":|",
        imagePath: Images.mood3,
        color: "#6ad8f9"
    },
    {
        id: 4,
        mood: 2,
        title: "Triste",
        smiley: ":/",
        imagePath: Images.mood2,
        color: "#EC5689"
    },
    {
        id: 5,
        mood: 1,
        title: "Dépressif",
        smiley: ":(",
        imagePath: Images.mood1,
        color: "#E270DF"
    }
]

export {
    MOODS,
    MOODS_TYPE,
    getItems,
    setItems
};
