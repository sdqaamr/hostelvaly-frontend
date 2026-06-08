import React, { useEffect, useState, useContext } from 'react'
import styles from '@styles/global'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import RecommendedHostels from '@components/RecommendedHostels'
import ListReview from '@components/ListReview'
import { BASE_URL } from '../../../services/config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../../context/authContext'

const Reviews = () => {
  const { token } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [recommended, setRecommended] = useState([])
  const getRecommendedHostels = async () => {
    try {
      const res = await fetch(`${BASE_URL}/hostels?limit=5`)
      const data = await res.json()

      if (data.success) {
        setRecommended(data.data)
      }
    } catch (err) {
      console.log('RECOMMENDED ERROR:', err)
    }
  }
  useEffect(() => {
    getMyReviews()
    getRecommendedHostels()
  }, [])

  const getMyReviews = async () => {
    try {
      console.log('TOKEN:', token)
      if (!token) {
        console.log('❌ No token found. User not logged in.')
        console.log('STORED TOKEN CHECK:', await AsyncStorage.getItem('token'))
        return
      }

      const res = await fetch(`${BASE_URL}/reviews/my-reviews`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await res.json()

      if (data.success) {
        setReviews(data.data)
        console.log('MY REVIEWS:', data.data)
      }
    } catch (error) {
      console.log('REVIEWS ERROR:', error)
    } finally {
      setLoading(false)
    }
  }

  const router = useRouter()
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.propertyDetailsHeaderContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <FontAwesome name='angle-left' size={26} color='black' />
          </TouchableOpacity>
          <View style={styles.propertyDetailsHeaderTextContainer}>
            <Text style={styles.propertyDetailsHeaderText}>My Reviews </Text>
          </View>
          <View style={styles.propertyDetailsEmptySpace} />
        </View>
        <View style={styles.hostelsListContainer}>
          {reviews.length === 0 && !loading ? (
            <Text style={styles.noReviewsText}>
              You have not posted any reviews yet{' '}
            </Text>
          ) : (
            reviews.map(review => (
              <ListReview key={review._id} review={review} />
            ))
          )}
        </View>
        <RecommendedHostels
          hostels={recommended}
          openBottomSheet={() => {}}
          loadMoreHostels={() => {}}
        />
        <View style={styles.extraPadding} />
      </View>
    </ScrollView>
  )
}
export default Reviews
