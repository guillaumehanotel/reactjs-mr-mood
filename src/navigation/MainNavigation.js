import React from "react";
import {TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from "react-native-elements";
import List from "@screens/List"
import Infos from "@screens/Infos"
import Profile from "@screens/Profile"
import CustomDrawerContent from "./CustomDrawerContent"

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

const StackNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="RootStack"
            component={TabsNavigation}
            options={({navigation}) => ({
                title: "Mr Mood",
                headerTitleStyle: {alignSelf: "flex-end", marginRight: 20},
                headerLeft: () => (
                    <TouchableOpacity style={{marginLeft: 20}} onPress={() => {
                        navigation.toggleDrawer()
                    }}>
                        <Icon name='user' type='font-awesome'/>
                    </TouchableOpacity>
                )
            })}
        />
    </Stack.Navigator>
)

const ProfileNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={"ProfileStack"}
            component={Profile}
            options={({navigation}) => ({
                title: "Mr Mood",
                headerTitleStyle: {alignSelf: "flex-end", marginRight: 20},
                headerLeft: () => (
                    <TouchableOpacity style={{marginLeft: 20}} onPress={() => {
                        navigation.toggleDrawer()
                    }}>
                        <Icon name='user' type='font-awesome'/>
                    </TouchableOpacity>
                )
            })}/>
    </Stack.Navigator>
)

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
