import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as service from '../../ServiceApi/service'

const Detail = ({ id }) => {
  const[getDetailMovie, setDetailMovie] = useState({})

  useState(() => {
    service.serviceRequest(id).then(obj => {
      setDetailMovie(obj)
    })
  })

  return(
    <>
      <View>
        <Text>The id is {getDetailMovie.id}</Text>
      </View>
    </>
  )
}

export default Detail