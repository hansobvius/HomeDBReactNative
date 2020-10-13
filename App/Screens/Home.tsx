import React, { useState } from  'react'
import { StyleSheet, FlatList, Image, Text } from 'react-native'
import * as service from '../ServiceApi/service'

const Home = () => {
    const [getMovies, setMovies] = useState([])

    useState(() => {
        service.serviceRequest().then( obj =>
            setMovies(obj.results)
        )
    })

    const getImageUri = (path: String): String =>{
        return `http://image.tmdb.org/t/p/w500/${path}` 
    }
 
    return(
        <>
            <FlatList
                data={getMovies}
                renderItem={({ item })=> (
                    <Image 
                    style={{
                        width: 50,
                        height: 50,
                        margin: 10
                    }}
                    source={{
                        uri: getImageUri(item.poster_path)
                    }}/>
                )}
                horizontal
            />
        </>
    )
}

const rowList = () => {
    return(
        <>
            <FlatList
                data={[]}
                renderItem={()=><></>}
            />
        </>
    )
}

const style = StyleSheet.create({})

export default Home