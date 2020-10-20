import React, { Component, useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View } from 'react-native'
import * as service from '../ServiceApi/service'
import * as imageUtil from '../utils/ImageUtils'
import * as model from '../models/ProjectModels'

const Home = () => {
    const [getMoviesList, setMoviesList] = useState([{}])
    const [getMovies, setMovies] = useState({})

    let urlList: [{}] = []

    useState(() => {
        model.urlModel.forEach( obj =>
            service.serviceRequest().then( obj => {
                console.log(`response obj: ${obj.results}`)
                urlList.push(obj)
                }
            )
        )
        setMoviesList(urlList)  

        service.serviceRequest().then( obj => {
            setMovies(obj)
        })
    })

    console.log(`DATA: ${getMoviesList[0].results[0].title}`)

    return(
        <>
            <Text style={style.rowTitle}>Popular</Text>
            <FlatList
                data={getMoviesList[0].results}
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