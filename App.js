import React from 'react';
import {StyleSheet, View} from 'react-native';
import DrawerNavigation from "@navigation/MainNavigation";
import store from "@redux";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from "redux-persist";

let persistor = persistStore(store)

const App = () => {
    return (
        <View style={styles.container}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <DrawerNavigation/>
                </PersistGate>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
