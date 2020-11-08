import React, { Component, useEffect, useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View, ScrollView } from 'react-native'
import * as service from '../../ServiceApi/service'
import * as model from '../../models/ProjectModels'
import HeaderContainer from './container/HeaderContainer'
import RowList from './container/RowList'
import style from './style/HomeStyle'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from "../../Overmind/index";

const overmind = createOvermind(config);

const Home = ({ navigation }) => {
  const[movieList, setMoviesList] = useState([])
  const[getTitle, setTitle] = useState([''])

  let urlList = []

  useEffect(() => {
    model.urlModel.forEach( value => {
      service.serviceRequest(value.uri).then( obj => {
        console.log(`response obj: ${obj.results}`)
        urlList.push(obj)
        setMoviesList(urlList)
      })
    })    
  }, [])

  return(
    <Provider value={overmind}>
      <View>
        {movieList.length > 0 && 
          <ScrollView>
          <HeaderContainer
            img={movieList[0].results[0].poster_path}
          />
          <FlatList
            data={movieList}
            renderItem={({ item })=> (
              <View>
                {item.results != null &&
                  <View>
                    <Text style={getTitle.length > 1 ? style.rowTitle : null}>{getTitle}</Text>                      
                    <RowList
                      navigation={navigation}
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
    </Provider>
  )
}

export default Home