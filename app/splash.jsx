import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../src/styles/global';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function Splash() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("onboarding");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  console.log("Splash screen loaded");
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")}
      style={styles.splashLogo}
      contentFit='contain'
      contentPosition="center"/>
    </View>
  );
}

