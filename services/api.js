import { BASE_URL } from './config'

export const loginUser = async payload => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  const data = await res.json()

  // Backend errors (including 500)
  if (!res.ok) {
    return data
  }

  return data
}

// GET PROFILE (JWT REQUIRED)
// =====================
export const getProfile = async token => {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res.json()
}
