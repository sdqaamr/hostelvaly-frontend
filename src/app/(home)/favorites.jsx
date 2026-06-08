import React, { useEffect, useState } from 'react'
import styles from '@styles/global'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import RecommendedHostels from '@components/RecommendedHostels'
import HostelListCard from '@components/HostelListCard'
import { BASE_URL } from '../../../services/config'
// dummy
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'expo-image'
import { colors } from '@constants/global'

const Favorites = () => {
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
    getRecommendedHostels()
  }, [])
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
            <Text style={styles.propertyDetailsHeaderText}>My Favorites </Text>
          </View>
          <View style={styles.propertyDetailsEmptySpace} />
        </View>

        <View style={styles.hostelsListContainer}>
{/* Dummy Data below, will replace with favorites data from backend */}

          <TouchableOpacity style={styles.listCard}>
            <View style={styles.listImgContainer}>
              <Image
                source='https://res.cloudinary.com/djr88us3q/image/upload/v1780551557/txy5lzgvkwrw1gwsc9cu.jpg'
                style={styles.listImage}
                contentFit='cover'
              />
            </View>
            <View>
              <Text style={styles.cardsHeadingText}>
                Premium Girls Hostel{' '}
              </Text>
              <View>
                <View style={styles.locationContainer}>
                  <Ionicons name='location-outline' size={20} color='gray' />
                  <Text style={styles.cardsSimpleText}>
                    Adda Bosan, Multan Saddar{' '}
                  </Text>
                </View>
                <View style={styles.listPill}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>4.0 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listCard}>
            <View style={styles.listImgContainer}>
              <Image
                source='https://res.cloudinary.com/djr88us3q/image/upload/v1780550783/a0qxxbn4nbq0jtqmmdma.jpg'
                style={styles.listImage}
                contentFit='cover'
              />
            </View>
            <View>
              <Text style={styles.cardsHeadingText}>
                Ali Boys Hostel{' '}
              </Text>
              <View>
                <View style={styles.locationContainer}>
                  <Ionicons name='location-outline' size={20} color='gray' />
                  <Text style={styles.cardsSimpleText}>
                    Chowk Kumharan, Multan City{' '}
                  </Text>
                </View>
                <View style={styles.listPill}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>4.9 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listCard}>
            <View style={styles.listImgContainer}>
              <Image
                source='https://res.cloudinary.com/djr88us3q/image/upload/v1780550474/ybszjhpjso07h7vwsw9n.jpg'
                style={styles.listImage}
                contentFit='cover'
              />
            </View>
            <View>
              <Text style={styles.cardsHeadingText}>Kaashi Boys Hostel </Text>
              <View>
                <View style={styles.locationContainer}>
                  <Ionicons name='location-outline' size={20} color='gray' />
                  <Text style={styles.cardsSimpleText}>
                    Railway Road, Shujabad{' '}
                  </Text>
                </View>
                <View style={styles.listPill}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>3.5 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listCard}>
            <View style={styles.listImgContainer}>
              <Image
                source='https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220'
                style={styles.listImage}
                contentFit='cover'
              />
            </View>
            <View>
              <Text style={styles.cardsHeadingText}>Ayan Boys Hostel </Text>
              <View>
                <View style={styles.locationContainer}>
                  <Ionicons name='location-outline' size={20} color='gray' />
                  <Text style={styles.cardsSimpleText}>
                    Gulgasht Colony, Multan City{' '}
                  </Text>
                </View>
                <View style={styles.listPill}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>4.2 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listCard}>
            <View style={styles.listImgContainer}>
              <Image
                source='https://res.cloudinary.com/djr88us3q/image/upload/v1780553468/msc23lu7b0mjwzcm8tsv.jpg'
                style={styles.listImage}
                contentFit='cover'
              />
            </View>
            <View>
              <Text style={styles.cardsHeadingText}>Al Imran Boys Hostel </Text>
              <View>
                <View style={styles.locationContainer}>
                  <Ionicons name='location-outline' size={20} color='gray' />
                  <Text style={styles.cardsSimpleText}>
                    Chungi No. 6, Multan City{' '}
                  </Text>
                </View>
                <View style={styles.listPill}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>4.8 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* <HostelListCard />
          <HostelListCard />
          <HostelListCard />
          <HostelListCard />
          <HostelListCard /> */}
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
export default Favorites
