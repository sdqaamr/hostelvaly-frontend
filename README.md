# 🏨 HostelValy

> A smart and seamless hostel-finding app built using React Native and Expo.

HostelValy is a modern mobile application designed to help users easily browse, explore, and book hostels — especially for students and travelers seeking affordable stays. With a user-friendly interface and features like onboarding, OTP-based login, and property detail screens, HostelValy aims to make accommodation hunting easier, faster, and more reliable.

---

## 🚀 Features

* ✨ **Splash & Onboarding**: Smooth first-time experience with intro slides.
* 🔐 **Authentication**: Secure login, registration, and OTP verification.
* 🏠 **Hostel Listings**: Browse curated hostel properties with images and details.
* 📋 **Property Details**: View room types, amenities, and pricing.
* 🧾 **Booking Flow**: Select rooms and complete monthly stay bookings.
* 📍 **Location & Navigation**: Optimized layout and intuitive routing with expo-router.
* 🖼️ **Media Support**: High-performance image loading with expo-image.
* 🎨 **Custom UI**: Modern, reusable components with global styles and theme.

---

## 🧑‍💻 Tech Stack

* **React Native** (via **Expo SDK 53**)
* **expo-router** for navigation
* **expo-font** for using custom fonts
* **expo-image** for high-performance image loading
* **expo-constants** for global constants
* **react-native-vector-icons** for rich iconography
* **react-native-svg** for SVG usage in the app
* **react-native-app-intro-slider** for onboarding slides
* **Safe Area Context**, **ScrollViews**, and modern React Hooks (`useState`, `useRouter`, `useCallback`)

---

## 📂 Project Structure

```
HostelValy/                  # Routing and navigation structure
├── src/
│   ├── app/                 # Screens (onboarding, auth, booking-screens, etc.)  
|   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components (LogoText, Splash, etc.)      
|   ├── constants/           # Global constants (colors, etc.)
|   └── styles/              # Global styles (layout, etc.)
├── App.js                   # Entry point
├── package.json             # Project metadata and scripts
└── README.md                # You're here!
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sdqaamr/hostelvaly-frontend.git
cd hostelvaly-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npx expo start
```

This will start the Expo dev server.
You can run the app on:
* 📱 **Expo Go App** (scan QR code)
* 🖥️ **iOS Simulator / Android Emulator**

---

## 📲 Key Screens

* **Splash & Onboarding**
* **Login / Registration with OTP**
* **Hostel Listings**
* **Property Details**
* **Booking Flow**
* **User Profile**

---

## 🔗 Related Projects

* 📦 **Backend API** → [HostelValy Backend API](https://github.com/sdqaamr/hostelvaly-backend-api)

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Authors & Mentors

| Role         | Name                                                                          |
| ------------ | ----------------------------------------------------------------------------- |
| 🧑‍💻 Author | [Saddiqa](https://github.com/sdqaamr) – Developer of HostelValy Mobile App    |
| 🎓 Mentor    | [Sir Allah Rakha](https://github.com/sudo-allahrakha) – Project Supervisor |
