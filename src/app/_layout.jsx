import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useCustomFonts from "@components/UseCustomFonts";
import { StatusBar } from "react-native";
import { colors } from "@constants/global";
import styles from "@styles/global";

const _layout = () => {
  useCustomFonts();
  console.log("App loaded");
  return (
    <SafeAreaView style={styles.flex} edges={["left", "right"]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.background}
      />
      <Stack screenOptions={{ headerShown: false, statusBarTranslucent: true }}>
        {/* <Stack.Screen name="profile" /> */}
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="account-entry" />
        <Stack.Screen name="login" />
        <Stack.Screen name="password-forget" />
        <Stack.Screen name="password-reset" />
        <Stack.Screen name="register" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="verify" />
        
        <Stack.Screen name="logout" />
        <Stack.Screen name="property-details" />
        <Stack.Screen name="booking" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="payment" />
        <Stack.Screen name="payment-success" />
        <Stack.Screen name="(tab2)" />
        
      </Stack>
    </SafeAreaView>
  );
};
export default _layout;
