import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as service from '../../ServiceApi/service'

const Detail = ({ route }) => {
  const[getDetailMovie, setDetailMovie] = useState({})
  const { itemId } = route.params

  useState(() => {
    service.serviceRequest(itemId).then(obj => {
      setDetailMovie(obj)
    })
  })

  return(
    <>
      <View>
        <Text>The title is {getDetailMovie.title}</Text>
      </View>
    </>
  )
}

export default Detail