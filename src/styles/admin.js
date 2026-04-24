import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    elevation: 2,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2933",
    textAlign: "center",
  },
  logoutButton: {
    marginTop: "auto",
    backgroundColor: "#DC2626",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;