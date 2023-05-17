import { View, Text, ScrollView, Image, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';

const Status = ({ navigation }) => {
  const Numbers = [
    "9974647293",
    "Nilesh",
    "8799312265",
    "Nepal",
    "99",
    "99",
    "9913",
    "99",
    "99",
    "99",
    "99",
    "99",
    "99",
    "99000 ",
  ];

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 15, backgroundColor: "#1c1c1f" }}>
      <TouchableOpacity style={{ marginTop: 17 }} activeOpacity={1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
                source={{
                  uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
                }}
              />
              <AntDesign style={{position:'absolute',left:34,top:33}} name="pluscircle" size={18} color="green" />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 17,
                      color: "#fff",
                    }}
                  >
                    My Status
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "#9d9da3",
                  }}
                >
                  Tap to add status updates
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ marginBottom: 5, marginTop: 15 }}>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "500" }}>
          Recent updates
        </Text>
      </View>
      {Array.from(Numbers).map((itm, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={{ marginVertical: 10 }}
            activeOpacity={1}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      borderWidth:2,
                      borderColor:'gray'
                    }}
                    source={{
                      uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    navigation.push("Chatroom", { name: itm });
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 17,
                          color: "#fff",
                        }}
                      >
                        {itm.length > 15
                          ? itm.slice(0, 16) + "..."
                          : itm.slice(0, 16)}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#9d9da3",
                      }}
                    >
                      12:05 AM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={{ marginBottom: 5, marginTop: 5 }}>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "500" }}>
          Viewed updates
        </Text>
      </View>
      <View
        style={{
          marginBottom: 100,
          marginTop: 5,
          borderTopWidth: 0.5,
          borderColor: "gray",
          paddingTop: 16,
          display:'flex',
          flexDirection:'row',
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "gray", fontSize: 12, fontWeight: "400" }}>
          Your status updates are{" "}
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
        <Text style={{ color: "#0C6157", fontSize: 12, fontWeight: "400" }}>
          end-to-end encrypted
        </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Status;
