import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'


const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  return (
  <View style={styles.background}>
    <SearchBar 
      term={term} 
      onChange={setTerm}
      onSubmit={() => searchApi(term)}
    />
    { errorMessage ? <Text>{errorMessage}</Text> : null }
    <Text>We have found {results.length} results</Text>

  </View>
)}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff', 
  }
})


export default SearchScreen