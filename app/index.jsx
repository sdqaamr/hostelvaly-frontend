import React from "react";
import Splash from "./splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}></GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
export default App;

// export { default } from 'expo-router';
