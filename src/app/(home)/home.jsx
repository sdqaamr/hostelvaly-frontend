import React, { useRef, useEffect, useState } from 'react'
import styles from '@styles/global'
import { View, ScrollView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import HomeHeader from '@components/HomeHeader'
import RecommendedHostels from '@components/RecommendedHostels'
import ViewedHostels from '@components/ViewedHostels'
import ScheduleBottomSheet from '@components/ScheduleBottomSheet'
import SortbyBottomSheet from '@components/SortbyBottomSheet'
import { usePathname } from 'expo-router'
import { BASE_URL } from '../../../services/config'

const Home = () => {
  const [hostels, setHostels] = useState([])
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('')
  const [tehsil, setTehsil] = useState('')
  const [search, setSearch] = useState('')
  const pathname = usePathname()
  const [bottomSheetKey, setBottomSheetKey] = useState(0)

  useEffect(() => {
    if (pathname === '/home') {
      bottomSheetRef.current?.close?.()
      sortBottomSheetRef.current?.close?.()
      setBottomSheetKey(prev => prev + 1)
    }
  }, [pathname])

  const bottomSheetRef = useRef(null)
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(3)
  }
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close()
  }

  const sortBottomSheetRef = useRef(null)
  const openSortBottomSheet = () => {
    sortBottomSheetRef.current?.snapToIndex(2)
  }
  const closeSortBottomSheet = () => {
    sortBottomSheetRef.current?.close()
  }

  const getHostels = async (newPage = 1, append = false) => {
    try {
      setLoading(true)

      let url = `${BASE_URL}/hostels?page=${newPage}&limit=3`

      if (sort) {
        url += `&sort=${sort}`
      }

      if (tehsil) {
        url += `&tehsil=${encodeURIComponent(tehsil)}`
      }

      if (search) {
        url += `&search=${encodeURIComponent(search)}`
      }

      const res = await fetch(url)
      const data = await res.json()

      if (data.success) {
        if (append) {
          setHostels(prev => [...prev, ...data.data])
        } else {
          setHostels(data.data)
        }
      }
    } catch (error) {
      console.log('HOSTELS ERROR:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadMoreHostels = () => {
    const nextPage = page + 1
    setPage(nextPage)
    getHostels(nextPage, true)
  }

  useEffect(() => {
    setPage(1)
    getHostels(1, false)
  }, [sort, tehsil, search])

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader
            openSortBottomSheet={openSortBottomSheet}
            search={search}
            setSearch={setSearch}
          />
          <RecommendedHostels
            hostels={hostels}
            openBottomSheet={openBottomSheet}
            loadMoreHostels={loadMoreHostels}
          />
          <ViewedHostels />
          <View style={styles.extraPadding} />
        </View>
      </ScrollView>
      <ScheduleBottomSheet
        key={`schedule-${bottomSheetKey}`}
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
      />
      <SortbyBottomSheet
        key={`sort-${bottomSheetKey}`}
        bottomSheetRef={sortBottomSheetRef}
        closeBottomSheet={closeSortBottomSheet}
        onSortSelect={sort => setSort(sort)}
        onTehsilSelect={tehsil => setTehsil(tehsil)}
      />
    </GestureHandlerRootView>
  )
}
export default Home
