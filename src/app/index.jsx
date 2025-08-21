import React from "react";
import Splash from "@components/Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "@styles/global";

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        <Splash />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
export default App;
