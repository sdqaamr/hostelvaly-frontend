import React, { useState, useEffect } from 'react'
import styles from '../../styles/global'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import Reviews from '@components/Reviews'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { colors } from '@constants/global'
import { useLocalSearchParams } from 'expo-router'
import { BASE_URL } from '../../../services/config'
import { getAmenityIcon } from '@constants/amenities'

const PropertyDetails = () => {
  const { id } = useLocalSearchParams()
  const [hostel, setHostel] = useState(null)
  const [loading, setLoading] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(false)
  const [avgRating, setAvgRating] = useState(0)
  const [reviewPage, setReviewPage] = useState(1)
  const [hasMoreReviews, setHasMoreReviews] = useState(true)
  const router = useRouter()

  const formatDescription = text => {
    if (!text) return ''

    const words = text.split(' ')
    if (words.length <= 16) return text

    return expanded ? text : words.slice(0, 16).join(' ') + '...'
  }

  const getHostelDetails = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/hostels/${id}`)
      const data = await res.json()

      if (data.success) {
        setHostel(data.data)
      }
    } catch (err) {
      console.log('DETAIL ERROR:', err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (id) {
      getHostelDetails()
    }
  }, [id])

  const getHostelReviews = async (pageNum = 1, append = false) => {
    try {
      setReviewsLoading(true)

      const res = await fetch(
        `${BASE_URL}/reviews?hostelId=${id}&page=${pageNum}&limit=5`
      )
      const data = await res.json()

      if (data.success) {
        const newReviews = data.data

        setReviews(prev => (append ? [...prev, ...newReviews] : newReviews))

        // ⭐ Average rating calculation
        const allReviews = append ? [...reviews, ...newReviews] : newReviews
        if (data.pagination.page >= data.pagination.totalPages) {
          setHasMoreReviews(false)
        } else {
          setHasMoreReviews(true)
        }
        const total = allReviews.reduce((sum, r) => sum + (r.rating || 0), 0)

        setAvgRating(
          allReviews.length ? (total / allReviews.length).toFixed(1) : 0
        )
      }
    } catch (err) {
      console.log('REVIEWS ERROR:', err)
    } finally {
      setReviewsLoading(false)
    }
  }
  useEffect(() => {
    if (id) {
      getHostelDetails()
      getHostelReviews()
    }
  }, [id])
  const loadMoreReviews = () => {
    if (reviewsLoading || !hasMoreReviews) return
    const nextPage = reviewPage + 1
    setReviewPage(nextPage)
    getHostelReviews(nextPage, true)
  }

  return (
    <SafeAreaView style={styles.safeArea2}>
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
              <Text style={styles.propertyDetailsHeaderText}>
                Property Details{' '}
              </Text>
            </View>
            <View style={styles.propertyDetailsEmptySpace} />
          </View>
          <View style={styles.propertyDetailsHeading2}>
            <Text style={styles.smallGrayFont}>Home </Text>
            <Entypo
              name='chevron-small-right'
              size={20}
              color='gray'
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Details </Text>
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.relativePosition}>
              <Image
                source={{
                  uri: hostel?.images?.[0] || undefined
                }}
                style={styles.propertyMainImage}
                contentFit='cover'
                placeholder={require('@assets/images/dummy.png')}
                transition={300}
              />
              <TouchableOpacity style={styles.heartIconContainer}>
                <MaterialCommunityIcons
                  name='cards-heart-outline'
                  style={styles.propertyDetailsLike}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.pillsContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.pills}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>{avgRating}</Text>
                </View>
                {hostel?.amenities?.map((item, index) => {
                  const match = getAmenityIcon(item)
                  if (!match) return null
                  const Icon = match.icon
                  return (
                    <View key={index} style={styles.pills}>
                      <Icon name={match.name} size={18} color='black' />
                      <Text>{match.label} </Text>
                    </View>
                  )
                })}
              </ScrollView>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>{hostel?.name}</Text>
              <View style={styles.locationContainer}>
                <Ionicons name='location-outline' size={20} color='gray' />
                <Text style={styles.cardsSimpleText}>
                  {hostel?.address}, {hostel?.tehsil}{' '}
                </Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>Description</Text>

              <Text style={styles.contentDescriptionContainer}>
                {formatDescription(hostel?.description)}

                {hostel?.description?.split(' ').length > 16 && (
                  <Text
                    onPress={() => setExpanded(prev => !prev)}
                    style={styles.readMoreText}
                  >
                    {expanded ? ' Read Less' : ' Read More'}
                  </Text>
                )}
              </Text>
            </View>
            <View style={styles.nameAndLocContainer}>
              <Text style={styles.previewContainer}>Preview </Text>
            </View>
            <View style={styles.propertyImgContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {hostel?.images?.length > 0 ? (
                  hostel.images.map((img, index) => (
                    <Image
                      key={index}
                      source={img}
                      style={styles.propertyImg}
                      contentFit='cover'
                      placeholder={require('@assets/images/dummy.png')}
                      transition={300}
                    />
                  ))
                ) : (
                  <Text>No images available</Text>
                )}
              </ScrollView>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>Available Room Types </Text>
              {hostel?.roomType?.map((room, index) => (
                <View key={index} style={styles.roomTypesContainer}>
                  <View style={styles.bookingDetailsContainer}>
                    <View style={styles.roomTypesHeading}>
                      <View style={styles.roomTypeButtonContainer}>
                        <Text>
                          {room.type.toUpperCase()}
                          {'  '}
                        </Text>
                      </View>
                      <Text>
                        PKR {room.monthlyRent}
                        <Text style={styles.grayText}>/mo* </Text>
                      </Text>
                    </View>
                    <Text style={styles.roomTypeDescription}>
                      {room.description}{' '}
                    </Text>
                    <Text style={styles.availabilityText}>
                      {room.availableRooms} rooms available{' '}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>Contact </Text>
              <Text style={styles.contactText}>
                For queries, please contact us at{' '}
                <Text style={styles.phoneNum}>{hostel?.owner?.phone}</Text> or
                our email{' '}
                <Text style={styles.phoneNum}>{hostel?.owner?.email}</Text>. We
                are available to assist you with any questions.
              </Text>
            </View>
            <Reviews
              reviews={reviews}
              loading={reviewsLoading}
              hasMore={hasMoreReviews}
              onLoadMore={loadMoreReviews}
            />
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.propertyDetailsLocationContainer}>
              <Entypo name='location' size={24} color='black' />
              <Text style={styles.cardsHeadingText}>Get Direction </Text>
            </View>
            <Image
              source='https://images.zameen.com/smap/400/300/33.641370278611/73.042983412743/image.jpeg?quality=80&imageformat=jpeg'
              contentFit='cover'
              style={styles.propertyDetailsGoogleMap}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.propertyDetailsButtonsContainer}>
        <TouchableOpacity
          onPress={() => {
            router.navigate('booking')
          }}
          style={styles.propertyDetailsPrimaryButton}
        >
          <Text style={styles.propertyDetailsPrimaryButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('Schedule visit feature is coming soon!')
            // router.navigate("/");
          }}
          style={styles.propertyDetailsSecondaryButton}
        >
          <Text style={styles.propertyDetailsSecondaryButtonText}>
            SCHEDULE VISIT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default PropertyDetails
