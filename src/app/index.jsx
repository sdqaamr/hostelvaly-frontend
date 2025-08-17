import React from "react";
import Splash from "@components/Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "@styles/global";
import Home from "./(tabs)/home";

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        {/* <Splash /> */}
        <Home />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
export default App;