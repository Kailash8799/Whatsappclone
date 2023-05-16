import { View, Text } from 'react-native'
import React from 'react'
import {Swipeable} from 'react-native-gesture-handler'

const Sender = ({msg,id,time}) => {
   const leftSwipe = ()=>{
    return <View>
        <Text>Delete</Text>
    </View>
   }
  return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View
                style={{
                  width: 220,
                  padding: 6,
                  borderRadius: 10,
                  backgroundColor: "#49495e",
                  marginVertical: 5,
                  alignSelf: "flex-end",
                }}
                key={id}
              >
                <Text style={{ color: "#fff" }}>
                    {msg}
                </Text>
                <Text style={{ alignSelf: "flex-end", color: "#fff" }}>
                  {time}
                </Text>
            </View>
         </Swipeable>
  )
}

export default Sender