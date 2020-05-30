import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState("")

  return (
  <View style={styles.background}>
    <SearchBar 
      term={term} 
      onChange={(newTerm => setTerm(newTerm))}
      onSubmit={() => console.log('term was submitted')}
    />
    <Text> SearchScreen</Text>
  </View>
)}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  }
})


export default SearchScreen