import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import * as service from '../../ServiceApi/service'
import * as imageUtil from '../../utils/ImageUtils'
import style from './style/DetailStyle'

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
        <Image
          style={style.imgHeader}
          source={{
              uri: imageUtil.getImageUri(getDetailMovie.poster_path)
          }}
        />
        <Text style={style.title}>{getDetailMovie.title}</Text>
        <Text 
          style={style.overview}
        >{getDetailMovie.overview}</Text>
      </View>
    </>
  )
}

export default Detail