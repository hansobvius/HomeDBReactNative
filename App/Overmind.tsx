import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Content from './Overmind/Content'
import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from "./Overmind/index";

const overmind = createOvermind(config, {
  devtools: "localhost:8081"
});

const Overmind = (props: any) => {
  return(
    <Provider value={overmind}>
      <Content/>
    </Provider>
  )
}

export default Overmind