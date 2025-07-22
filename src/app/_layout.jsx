import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useCustomFonts from "@components/usecustomfonts";
import { StatusBar } from "react-native";

const _layout = () => {
  useCustomFonts();
  console.log("App loaded");
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#F0F0F0"
      />
      <Stack screenOptions={{ headerShown: false, statusBarTranslucent: true }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="account-entry" />
        <Stack.Screen name="login" />
        <Stack.Screen name="password-forget" />
        <Stack.Screen name="password-reset" />
        <Stack.Screen name="register" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="verify" />
        <Stack.Screen name="tabs" />
        <Stack.Screen name="property-details" />
        <Stack.Screen name="booking" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="payment" />
        <Stack.Screen name="payment-success" />
        <Stack.Screen name="home-page2" />
      </Stack>
    </SafeAreaView>
  );
};
export default _layout;
