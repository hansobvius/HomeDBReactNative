import React from  'react'
import { StyleSheet, FlatList, Image } from 'react-native'
import * as service from '../ServiceApi/service'

const Home = () => {
    const movies = service.serviceRequest()
    return(
        <>
            <FlatList
                data={[movies]}
                renderItem={()=> 
                    <Image
                        uri={movies}
                    />
                }
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