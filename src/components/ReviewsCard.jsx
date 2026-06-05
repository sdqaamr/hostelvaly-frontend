import React from 'react'
import styles from '@styles/global'
import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { colors } from '@constants/global'
import { Image } from 'expo-image'

const ReviewsCard = ({ review }) => {
  return (
    <View style={styles.reviewsCard}>
      <View style={styles.reviewsCardContentContainer}>
        <Image
          source='https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/girl-1024.png'
          style={styles.reviewsUserImg}
        />

        <View style={styles.reviewsContentContainer}>
          <Text style={styles.cardsHeadingText}>
            {review?.user?.fullName || 'Anonymous'}
          </Text>

          <View style={styles.reviewsRatingContainer}>
            {[1, 2, 3, 4, 5].map(i => (
              <FontAwesome
                key={i}
                name={i <= review.rating ? 'star' : 'star-o'}
                size={16}
                color={colors.ratingStar}
              />
            ))}
          </View>

          <Text
            style={styles.reviewsCommentText}
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {review.comment}
          </Text>
        </View>
      </View>
    </View>
  )
}
export default ReviewsCard
