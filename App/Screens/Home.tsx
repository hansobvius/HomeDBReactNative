import React, { Component, useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View, ScrollView } from 'react-native'
import * as service from '../ServiceApi/service'
import * as imageUtil from '../utils/ImageUtils'
import * as model from '../models/ProjectModels'

const Home = () => {
    const[getMoviesList, setMoviesList] = useState([{}])
    const[getTitle, setTitle] = useState([''])

    let titleList: [''] = ['']
    let urlList: [{}] = [{}]

    useState(() => {
        model.urlModel.forEach( value => {
            service.serviceRequest(value.uri).then( obj => {
                console.log(`response obj: ${obj.results}`)
                urlList.push(obj)
                }
            )
        })
        setMoviesList(urlList)  
    })

    console.log(`DATA: ${getMoviesList[1].results[0].poster_path}`)

    return(
        <>
        <ScrollView>
            <HeaderContainer
                img={getMoviesList[1].results[0].poster_path}
            />
            <FlatList
                data={getMoviesList}
                renderItem={({ item })=> (
                    <View>
                        {item.results != null &&
                            <View>
                                <Text style={style.rowTitle}>{getTitle}</Text>                      
                                <RowList
                                    list={item.results}
                                />
                            </View>
                        }
                    </View>
                )}
            />
            </ScrollView>
        </>
    )
}

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
    headerContainer: {
        backgroundColor: "#E6E6E6",
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    row:{
        flex: 2
    },
    rowTitle:{
        margin: 5
    },
    imgHeader:{
        alignSelf: 'stretch',
        textAlign: 'center',
        height: 250
    },
    imageContainer:{
        
    },
    imageCard:{
        flex: 1,
        width: 100,
        height: 150,
        margin: 10,
    }
})

export default Home