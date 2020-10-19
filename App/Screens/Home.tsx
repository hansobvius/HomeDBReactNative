import React, { useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View } from 'react-native'
import * as service from '../ServiceApi/service'
import * as imageUtil from '../utils/ImageUtils'

const Home = () => {
    const [getMovies, setMovies] = useState([])

    useState(() => {
        service.serviceRequest().then( obj =>
            setMovies(obj.results)
        )
    })

    return(
        <>
            <Text style={style.rowTitle}>Popular</Text>
            <FlatList
                data={getMovies}
                renderItem={({ item })=> (
                    <RowList
                        image={item.poster_path}
                    />
                )}
                horizontal
            />
        </>
    )
}

const RowList = ( props ) => {
    const[getImage, setImage] = useState('')

    useState(() =>{
        setImage(props.image)
    })

    return(
        <View style={style.imageContainer}>
            <Image 
                style={style.imageCard}
                source={{
                    uri: imageUtil.getImageUri(getImage)
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    component:{
        flex: 4
    },
    row:{
        flex: 2
    },
    rowTitle:{
        margin: 5
    },
    imageContainer:{
        alignSelf:'baseline'
    },
    imageCard:{
        width: 50,
        height: 50,
        margin: 10,
        alignItems: 'stretch'
    }
})

export default Home