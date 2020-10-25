import React, { useState } from 'react'
import { View, FlatList, Image, TouchableNativeFeedback, ToastAndroid } from 'react-native'
import style from '../style/HomeStyle'
import * as imageUtil from '../../../utils/ImageUtils'

const RowList = ( props ) => {
  const[getList, setList] = useState({})

  useState(() =>{
      setList(props.list)
  })

  return(
      <View style={style.imageContainer}>
          <FlatList
              data={getList}
              renderItem={({ item })=> (
                  <View>
                      <TouchableNativeFeedback
                        onPress={() => {
                            ToastAndroid.show(`${item.title}`, ToastAndroid.SHORT)
                        }}
                      >
                        <Image 
                            style={style.imageCard}
                            source={{
                                uri: imageUtil.getImageUri(item.poster_path)
                            }}
                        />
                      </TouchableNativeFeedback>
                  </View>
              )}
              horizontal
          />
      </View>
  )
}

export default RowList