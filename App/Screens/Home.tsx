import React from  'react'
import { StyleSheet, FlatList } from 'react-native'
import * as service from '../ServiceApi/service'

const Home = () => {
    const movies = service.serviceRequest()
    return(
        <>
            <FlatList
                data={[movies]}
                renderItem={()=> <></>}
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