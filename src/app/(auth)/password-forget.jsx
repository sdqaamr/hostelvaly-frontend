
import styles from "@styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function PasswordReset() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>
          Forgot {"\n"}Password?
        </Text>
        <Text style={styles.simpleText}>Don't worry! happens. Please enter the address associated with your account.</Text>
        <Text></Text>
        <TextInput style={styles.textInput} placeholder="Email address" />
        <TouchableOpacity onPress={() => {
          router.navigate("password-reset");
        }} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
