import React from "react";
import { Text } from "react-native";
import styles from "../styles/global";
export default function LogoText() {
  return (
    <Text style={styles.logoText}>
      Stay
      <Text style={styles.logoText2}>Sphere</Text>
    </Text>
  );
}
