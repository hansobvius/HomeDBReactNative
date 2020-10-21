import React, { Component, useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View, ScrollView } from 'react-native'
import * as service from '../../ServiceApi/service'
import * as model from '../../models/ProjectModels'
import HeaderContainer from './container/HeaderContainer'
import RowList from './container/RowList'
import style from './style/HomeStyle'

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
            })
        })
        setMoviesList(urlList)  
    })

    console.log(`DATA: ${getMoviesList.length}`)

    console.log('Done')

    return(
        <>
        <View>
            {getMoviesList.length > 0 && 
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
                                    <Text style={getTitle.length > 1 ? style.rowTitle : null}>{getTitle}</Text>                      
                                    <RowList
                                        list={item.results}
                                    />
                                </View>
                            }
                        </View>
                    )}
                />
                </ScrollView>
            }
            </View>
        </>
    )
}

export default Home