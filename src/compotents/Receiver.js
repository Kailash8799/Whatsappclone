import { View, Text } from 'react-native'
import React from 'react'

const Receiver = ({msg,id,time}) => {
  return (
            <View
                style={{
                  width: 220,
                  padding: 6,
                  borderRadius: 10,
                  backgroundColor: "#424245",
                  marginVertical: 5,
                }}
              >
                <Text style={{ color: "#fff" }}>
                  {msg}
                </Text> 
                <Text style={{ alignSelf: "flex-end", color: "#fff",opacity:0.7 }}>
                  {time}
                </Text>
              </View>
  )
}

export default Receiver