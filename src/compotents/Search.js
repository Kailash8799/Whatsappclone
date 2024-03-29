import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

const Search = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search