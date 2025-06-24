import React from "react";
import Splash from "./splash";
import { SafeAreaProvider } from "react-native-safe-area-context";

 function App() {
  
  return (
    <SafeAreaProvider>
      <Splash />
    </SafeAreaProvider>
  );
};
export default App;

// export { default } from 'expo-router';