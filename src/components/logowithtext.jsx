import React from "react";
import { View, Image } from "react-native";
import styles from "@styles/global";
import LogoText from "./logotext";

export default function LogoWithText() {
  return (
    <View style={styles.logoWithTextContainer}>
        <Image source={require("../mainAssets/images/onboard.png")}
        style={styles.logoImg} />
        <LogoText />
    </View>
  );
}