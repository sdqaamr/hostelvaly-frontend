import React from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import ReviewsCard from '@components/ReviewsCard'

const Reviews = ({ reviews = [], onLoadMore, hasMore, loading }) => {
  // 👉 CASE: No reviews at all
  if (!loading && reviews.length === 0) {
    return (
      <>
        <View style={styles.cardsHeadingContainer}>
          <Text style={styles.cardsHeadingText}>User Reviews</Text>
        </View>

        <View style={styles.noReviewsContainer}>
          <Text style={styles.noReviewsText}>
            This hostel has no reviews yet.{' '}
          </Text>
        </View>
      </>
    )
  }

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent

    const isCloseToEnd =
      layoutMeasurement.width + contentOffset.x >= contentSize.width - 20

    if (isCloseToEnd && hasMore && !loading) {
      onLoadMore?.()
    }
  }

  return (
    <>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>User Reviews{' '}</Text>
      </View>

      <ScrollView
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {reviews.map(r => (
          <ReviewsCard key={r._id} review={r} />
        ))}
      </ScrollView>
    </>
  )
}

export default Reviews
