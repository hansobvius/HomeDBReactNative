import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import HeaderContainer from '../home/container/HeaderContainer'
import * as service from '../../ServiceApi/service'
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
        <HeaderContainer
          img={getDetailMovie.poster_path}
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