import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import useCustomFonts from "../src/components/usecustomfonts";

const _layout = () => {
  useCustomFonts();
  console.log("App loaded");
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="onboarding-a" />
        <Stack.Screen name="onboarding-b" />
        <Stack.Screen name="onboarding-c" />
        <Stack.Screen name="onboarding-d" />
        <Stack.Screen name="account-entry" />
        <Stack.Screen name="login" />
        <Stack.Screen name="password-forget" />
        <Stack.Screen name="password-reset" />
        <Stack.Screen name="register" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="verify" />
        <Stack.Screen name="home" />
        <Stack.Screen name="schedule-visit" />
        <Stack.Screen name="property-details" />
        <Stack.Screen name="booking" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="payment" />
        <Stack.Screen name="payment-success" />
        <Stack.Screen name="home-page2" />
      </Stack>
    </View>
  );
};
export default _layout;
