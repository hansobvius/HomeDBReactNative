import React, { useState } from  'react'
import { StyleSheet, FlatList, Image, Text } from 'react-native'
import * as service from '../ServiceApi/service'

const Home = () => {
    const [getMovies, setMovies] = useState([])
    /*
        {(getMovies == null) == true && service.serviceRequest().then( obj =>
            setMovies(obj.results.poster_path)
        )}
    */
    service.serviceRequest().then( obj =>
        setMovies(obj.results)
    )

    console.log(`movies is ${getMovies}`)
    return(
        <>
            <FlatList
                data={getMovies}
                renderItem={({ item })=> (
                    <Text>{item.title}</Text>
                )}
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