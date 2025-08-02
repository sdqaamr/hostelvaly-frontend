# 🏨 HostelValy

> A smart and seamless hostel-finding app built using React Native and Expo.

HostelValy is a modern mobile application designed to help users easily browse, explore, and book hostels — especially for students and travelers seeking affordable stays. With a user-friendly interface and features like onboarding, OTP-based login, and property detail screens, HostelValy aims to make accommodation hunting easier, faster, and more reliable.

---

## 📱 Features

- ✨ **Splash & Onboarding**: Smooth first-time experience for new users.
- 🔐 **Authentication**: Secure Login, Registration, and OTP verification flow.
- 🏠 **Property Listings**: Explore a curated list of hostel properties with images and details.
- 📋 **Property Details**: View in-depth information, room types, amenities, and pricing.
- 🧾 **Booking Flow**: Select rooms and proceed to checkout for monthly stay plans.
- 📍 **Location & Navigation**: Icons and layout optimized for a clean, intuitive UX.

---

## 🚀 Tech Stack

- **React Native** (via **Expo SDK 53**)
- **expo-router** for navigation
- **expo-font** for using custom fonts
- **expo-image** for high-performance image loading
- **expo-constants** for global constants
- **react-native-vector-icons** for rich iconography
- **react-native-svg** for SVG usage in the app
- **react-native-app-intro-slider** for onboarding slides
- **Safe Area Context**, **ScrollViews**, and modern React Hooks (`useState`, `useRouter`, `useCallback`)

---

## 📂 Project Structure

```text
HostelValy/                  # Routing and navigation structure
├── src/
│   ├── app/                 # Screens (onboarding, auth, booking-screens, etc.)  
|   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components (LogoText, Splash, etc.)      
|   ├── constants/           # Global constants (colors, etc.)
|   ├── styles/              # Global styles (layout, etc.)
└── README.md                # You're here!
