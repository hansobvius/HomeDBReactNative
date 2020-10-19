import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { create } from 'react-test-renderer'

const FlexExp = () => {
  return(
    <View style={style.component}>
      <Text style={style.textone}>Hello</Text>
      <Text style={style.texttwo}>World</Text>
    </View>
  )
}

const style = StyleSheet.create({
  component:{
      flex: 3
  },
  textone:{
      flex: 2
  },
  texttwo:{
      flex: 1
  }
})

export default FlexExp