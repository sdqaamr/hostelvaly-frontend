import React, { useEffect } from "react";
import { View } from "react-native";
import styles from "@styles/global";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

const Splash = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("onboarding");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.splashLogo}
        contentFit="contain"
        contentPosition="center"
      />
    </View>
  );
};
export default Splash;