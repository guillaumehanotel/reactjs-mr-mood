import React from 'react';
import { StyleSheet, View } from 'react-native';
import DrawerNavigation from "@navigation/MainNavigation";

const App = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
