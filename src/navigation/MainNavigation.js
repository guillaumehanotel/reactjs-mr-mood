import React from "react";
import {TouchableOpacity} from "react-native";
import {NavigationContainer, DrawerActions} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from "react-native-elements";
import List from "@screens/List"
import Infos from "@screens/Infos"
import Profile from "@screens/Profile"

const Tabs = createBottomTabNavigator()
const TabsNavigation = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Main" component={List}/>
        <Tabs.Screen name="Infos" component={Infos}/>
    </Tabs.Navigator>
)

const RootStack = createStackNavigator();
const RootStackNavigation = () => (
    <RootStack.Navigator>
        <RootStack.Screen
            name="RootStack"
            component={TabsNavigation}
            options={(props) => ({
                title: "Mr Mood",
                headerTitleStyle: {
                    alignSelf: "flex-end",
                    marginRight: 20
                },
                headerLeft: () => (
                    <TouchableOpacity
                        style={{marginLeft: 20}}
                        onPress={() => {
                            console.log(props)
                            props.navigation.dispatch(DrawerActions.toggleDrawer())
                        }}
                    >
                        <Icon name='user' type='font-awesome'/>
                    </TouchableOpacity>
                )
            })}/>
    </RootStack.Navigator>
)

const Drawer = createDrawerNavigator()
const DrawerNavigation = () => (
    <NavigationContainer>
        <Drawer.Navigator name="Mr Mood">
            <Drawer.Screen name="Home" component={RootStackNavigation}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    </NavigationContainer>

)

export default DrawerNavigation;
