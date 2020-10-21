import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const Detail = ({ id }) => {
  const[getId, setId] = useState(Number)

  useState(() => {
    setId(id)
  })

  return(
    <>
      <View>
        <Text>The id is {getId}</Text>
      </View>
    </>
  )
}

export default Detail