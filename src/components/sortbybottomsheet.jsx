import React, { useMemo, useCallback, useState } from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity } from 'react-native'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView
} from '@gorhom/bottom-sheet'
import AntDesign from '@expo/vector-icons/AntDesign'

const SortbyBottomSheet = ({
  bottomSheetRef,
  closeBottomSheet,
  onSortSelect,
  onTehsilSelect
}) => {
  const [selectedSort, setSelectedSort] = useState(null)
  const [selectedTehsil, setSelectedTehsil] = useState(null)

  const sortOptions = [
    { id: 1, name: 'Price - Low to High', value: 'price_asc' },
    { id: 2, name: 'Price - High to Low', value: 'price_desc' },
    { id: 3, name: 'Rating - High to Low', value: 'rating_desc' },
    { id: 4, name: 'Rating - Low to High', value: 'rating_asc' }
  ]

  const tehsilOptions = [
    { id: 1, name: 'Multan City' },
    { id: 2, name: 'Multan Saddar' },
    { id: 3, name: 'Shujabad' },
    { id: 4, name: 'Jalalpur Pirwala' }
  ]

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], [])
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  )

  const handleSortSelect = option => {
    setSelectedSort(option.id)
    onSortSelect?.(option.value)
  }

  const handleTehsilSelect = option => {
    setSelectedTehsil(option.id)
    onTehsilSelect?.(option.name)
  }

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      index={-1}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.scheduleContainer}>
        <View style={styles.cardsHeadingContainer}>
          <Text style={styles.cardsHeadingText}>Sort & Filter</Text>

          <AntDesign
            onPress={closeBottomSheet}
            name='close'
            size={24}
            color='white'
          />
        </View>

        <Text style={styles.cardsHeadingText}>Sort By</Text>

        <View style={styles.sortItemsContainer}>
          {sortOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.sortTextContainer,
                selectedSort === option.id && {
                  borderWidth: 1,
                  borderColor: '#fff'
                }
              ]}
              onPress={() => handleSortSelect(option)}
            >
              <Text style={styles.sortText}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.cardsHeadingText, { marginTop: 20 }]}>
          Filter By Tehsil
        </Text>

        <View style={styles.sortItemsContainer}>
          {tehsilOptions.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.sortTextContainer,
                selectedTehsil === option.id && {
                  borderWidth: 1,
                  borderColor: '#fff'
                }
              ]}
              onPress={() => handleTehsilSelect(option)}
            >
              <Text style={styles.sortText}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheetView>
    </BottomSheet>
  )
}

export default SortbyBottomSheet
