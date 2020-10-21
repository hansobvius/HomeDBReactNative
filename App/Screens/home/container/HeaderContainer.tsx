import React, { useState } from 'react'
import { View, Image } from 'react-native'
import style from '../style/HomeStyle'
import * as imageUtil from '../../../utils/ImageUtils'

const HeaderContainer = (props) => {
  const[getValue, setValue] = useState('')

  useState(() => {
      setValue(props.img)
  })
  
  return(
      <View style={style.headerContainer}>
         <Image 
              style={style.imgHeader}
              source={{
                  uri: imageUtil.getImageUri(getValue)
              }}
          />
      </View>
  )
}

export default HeaderContainer