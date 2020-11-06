import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from "react-native-elements";
import List from "@screens/List"
import Infos from "@screens/Infos"
import Profile from "@screens/Profile"
import CustomDrawerContent from "./CustomDrawerContent"
import {useSelector} from "react-redux";

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator()


const TabsNavigation = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Main" component={List}/>
        <Tabs.Screen name="Infos" component={Infos}/>
    </Tabs.Navigator>
)

const StackNavigation = () => {

    const user = useSelector(state => state.user.user);
    const isLogged = useSelector(state => state.user.isLogged);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RootStack"
                component={TabsNavigation}
                options={({navigation}) => ({
                    title: "Mr Mood",
                    headerTitleStyle: {alignSelf: "flex-end", marginRight: 20},
                    headerLeft: () => (
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={{marginLeft: 20}} onPress={() => {
                                navigation.toggleDrawer()
                            }}>
                                <Icon name='user' type='font-awesome'/>
                                {isLogged && (
                                    <Text>{user.name}</Text>
                                )}
                            </TouchableOpacity>
                            <View style={[styles.loggedStatus, isLogged ? styles.greenStatus : styles.redStatus]}/>
                        </View>
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    loggedStatus: {
        width: 10,
        height: 10,
        borderRadius: 50
    },
    redStatus: {
        backgroundColor: 'red',
    },
    greenStatus: {
        backgroundColor: 'green',
    }

});

const ProfileNavigation = () => {
    const user = useSelector(state => state.user.user);
    const isLogged = useSelector(state => state.user.isLogged);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"ProfileStack"}
                component={Profile}
                options={({navigation}) => ({
                    title: "Mr Mood",
                    headerTitleStyle: {alignSelf: "flex-end", marginRight: 20},
                    headerLeft: () => (
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={{marginLeft: 20}} onPress={() => {
                                navigation.toggleDrawer()
                            }}>
                                <Icon name='user' type='font-awesome'/>
                                {isLogged && (
                                    <Text>{user.name}</Text>
                                )}
                            </TouchableOpacity>
                            <View style={[styles.loggedStatus, isLogged ? styles.greenStatus : styles.redStatus]}/>
                        </View>
                    )
                })}/>
        </Stack.Navigator>
    )
}

const DrawerNavigation = () => (
    <NavigationContainer>
        <Drawer.Navigator name="Mr Mood"
                          drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={StackNavigation}/>
            <Drawer.Screen name="Profile" component={ProfileNavigation}/>
        </Drawer.Navigator>
    </NavigationContainer>

)

export default DrawerNavigation;
