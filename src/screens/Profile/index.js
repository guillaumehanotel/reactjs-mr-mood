import {Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/user/actions";

const Profile = () => {

    const dispatch = useDispatch();

    return (
        <View>
            <TouchableOpacity
                onPress={() => dispatch(login())}>
                <Text>Se connecter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;
