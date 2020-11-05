import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import React from "react";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem
                label="Se déconnecter"
                style={{marginTop: 380}}
                onPress={() => console.log("logout")}
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;
