import React, { Component, useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View } from 'react-native'
import * as service from '../ServiceApi/service'
import * as imageUtil from '../utils/ImageUtils'
import * as model from '../models/ProjectModels'

const Home = () => {
    const [getMoviesList, setMoviesList] = useState([{}])

    let urlList: [{}] = [{}]

    useState(() => {
        model.urlModel.forEach( obj =>
            service.serviceRequest().then( obj => {
                console.log(`response obj: ${obj.results}`)
                urlList.push(obj)
                }
            )
        )
        setMoviesList(urlList)  
    })

    return(
        <>
            <FlatList
                data={getMoviesList}
                renderItem={({ item })=> (
                    <View>
                        {item.results != null &&
                         <View>
                            <Text style={style.rowTitle}>Popular</Text>                      
                            <RowList
                                list={item.results}
                            />
                         </View>
                        }
                    </View>
                )}
            />
        </>
    )
}

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
                        <Image 
                            style={style.imageCard}
                            source={{
                                uri: imageUtil.getImageUri(item.poster_path)
                            }}
                        />
                    </View>
                )}
                horizontal
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
        
    },
    imageCard:{
        width: 50,
        height: 50,
        margin: 10,
        alignItems: 'stretch'
    }
})

export default Home