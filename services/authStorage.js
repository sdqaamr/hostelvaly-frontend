import AsyncStorage from '@react-native-async-storage/async-storage'

// 🔐 Save token
export const saveToken = async token => {
  try {
    await AsyncStorage.setItem('auth_token', token)
  } catch (e) {
    console.log('Error saving token', e)
  }
}

// 👤 Save user info (role, email, etc.)
export const saveUser = async user => {
  try {
    await AsyncStorage.setItem('auth_user', JSON.stringify(user))
  } catch (e) {
    console.log('Error saving user', e)
  }
}

// 📥 Get token
export const getToken = async () => {
  return await AsyncStorage.getItem('auth_token')
}

// 📥 Get user
export const getUser = async () => {
  const user = await AsyncStorage.getItem('auth_user')
  return user ? JSON.parse(user) : null
}

// 🚪 Logout
export const logout = async () => {
  await AsyncStorage.removeItem('auth_token')
  await AsyncStorage.removeItem('auth_user')
}