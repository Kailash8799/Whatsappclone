import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Bottomshit = ({bottomsit}) => {
  const bottomShitref = useRef(null);
  const snapPoint = ["48%"];
  const handlePresentModel = () => {
    bottomShitref.current?.present();
  };
  
  useEffect(() => {
    if(bottomsit){
        handlePresentModel()
    }
  }, [bottomsit])
  
  
  return (
    <BottomSheetModalProvider>
      <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
        <BottomSheetModal
        ref={bottomShitref}
        index={0}
        snapPoints={snapPoint}
        >
            <View>
                <Text>Hello</Text>
            </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Bottomshit;
