import React from 'react';
import { View } from 'react-native';
import styles from '../src/styles/global';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function Splash() {
  const router = useRouter();
  setTimeout(() => {
    router.navigate("onboarding-a");
  }, 3000);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")}
      style={styles.splashLogo}
      contentFit='contain'
      contentPosition="center"/>
    </View>
  );
}

