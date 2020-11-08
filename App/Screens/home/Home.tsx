import React, { Component, useEffect, useState } from  'react'
import { StyleSheet, FlatList, Image, Text, View, ScrollView } from 'react-native'
import * as service from '../../ServiceApi/service'
import * as model from '../../models/ProjectModels'
import HeaderContainer from './container/HeaderContainer'
import RowList from './container/RowList'
import style from './style/HomeStyle'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from "../../overmind/index"
import { useOvermind } from '../../overmind/index'

const overmind = createOvermind(config);

const Home = ({ navigation }) => {
  const[getTitle, setTitle] = useState([''])

  const {state, actions} = useOvermind();

  let urlList:any = []

  useEffect(() => {
    model.urlModel.forEach( value => {
      service.serviceRequest(value.uri).then( obj => {
        console.log(`response obj: ${obj.results}`)
        urlList.push(obj)
        actions.inject(urlList)
      })
    })    
  }, [])

  return(
    <Provider value={overmind}>
      <View>
        {state.movies.length > 0 && 
          <ScrollView>
          <HeaderContainer
            img={state.movies[0].results[0].poster_path}
          />
          <FlatList
            data={state.movies}
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