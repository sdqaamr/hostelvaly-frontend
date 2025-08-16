import React from "react";
import Splash from "@components/Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "@styles/global";
import HomePage2 from "./(tab2)/home-page2";

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        <Splash />
        {/* <HomePage2 /> */}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
export default App;