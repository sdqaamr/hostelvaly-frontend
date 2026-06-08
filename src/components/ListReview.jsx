import React from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Image } from 'expo-image'
import { colors } from '@constants/global'

const ListReview = ({ review }) => {
  const hostelName = review?.hostel?.name || 'Unknown Hostel'
  const hostelImage =
    review?.hostel?.images?.[0] || 'https://via.placeholder.com/150'
  return (
    <>
      <TouchableOpacity style={styles.listCard}>
        <View style={styles.listImgContainer}>
          <Image
            source={hostelImage}
            style={styles.listImage}
            contentFit='cover'
            placeholder={require('@assets/images/dummy.png')}
            transition={300}
          />
        </View>
        <View>
          <Text style={styles.cardsHeadingText}>{hostelName} </Text>
          <View>
            <View style={styles.flexDirection}>
              <View style={styles.reviewsRatingContainer}>
                {[1, 2, 3, 4, 5].map(num => (
                  <FontAwesome
                    key={num}
                    name={num <= review.rating ? 'star' : 'star-o'}
                    size={17}
                    color={colors.ratingStar}
                  />
                ))}
              </View>
            </View>

            <Text numberOfLines={3} ellipsizeMode='tail' style={{ width: 230 }}>
              {review.comment}{' '}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}
export default ListReview
