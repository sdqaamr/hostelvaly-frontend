import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "@styles/global";
import { colors } from "@constants/global";
import { TouchableOpacity } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.homeTabBar,
        tabBarBadgeStyle: styles.tabBarBadgeStyle,
      }}
    >
      <Tabs.Screen
        name="home-page2"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: "Reviews",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
          tabBarBadge: "2",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={props.onPress}
              style={styles.customTabButton}
              activeOpacity={0.8}
            >
              <FontAwesome5 name="plus" size={32} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
