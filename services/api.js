import { getToken } from './authStorage'
import { BASE_URL } from './config'

export const authFetch = async (url, options = {}) => {
  const token = await getToken()

  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options.headers
    }
  })
}