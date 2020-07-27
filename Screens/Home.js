import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Animated } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  TouchableNativeFeedback,
  TextInput,
} from "react-native-gesture-handler";

const InputSelectBox = (props) => {
  const scalAnim = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: 65,
          borderRadius: 5,
          marginVertical: 5,
        },
        {
          transform: [
            {
              scale: scalAnim,
            },
          ],
        },
      ]}
    >
      <TouchableNativeFeedback
        onPress={props.click}
        useForeground={false}
        background={TouchableNativeFeedback.Ripple("#364f6b", true)}
      >
        <View
          style={{
            height: 65,
            backgroundColor: "rgba(255, 255, 255,0.5)",
            borderRadius: 5,
            borderBottomWidth: 2,
            borderBottomColor: "rgba(0, 0, 0,0.3)",
            flexDirection: "row",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              width: "80%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "30%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Sora-Bold",
                  color: "rgba(54, 79, 107,0.7)",
                }}
              >
                {props.title}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Sora-Regular",
                  color: "rgba(54, 79, 107,1)",
                }}
              >
                {props.subtitle}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="arrow-drop-down" size={50} color={"#364f6b"} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </Animated.View>
  );
};
const InputTextBox = (props) => {
  const scalAnim = useRef(new Animated.Value(1)).current;
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: 65,
          borderRadius: 5,
          marginVertical: 5,
        },
        {
          transform: [
            {
              scale: scalAnim,
            },
          ],
        },
      ]}
    >
      <TouchableNativeFeedback
        onPress={props.click}
        useForeground={false}
        background={TouchableNativeFeedback.Ripple("#364f6b", true)}
      >
        <View
          style={{
            height: 65,
            backgroundColor: "rgba(255, 255, 255,0.5)",
            borderRadius: 5,
            borderBottomWidth: 2,
            borderBottomColor: "rgba(0, 0, 0,0.3)",
            flexDirection: "row",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "30%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Sora-Bold",
                  color: "rgba(54, 79, 107,0.7)",
                }}
              >
                {props.title}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
                justifyContent: "center",
              }}
            >
              <TextInput
                placeholder={"Enter Seller Name"}
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 16,
                  fontFamily: "Sora-Medium",
                  color: "rgba(54, 79, 107,0.7)",
                }}
              />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Animated.View>
  );
};

export default function Home() {
  const [seller, setSeller] = useState("Select-One");
  const [Purchaser, setPurchaser] = useState("yn");
  const [items, setitems] = useState("Select-one");
  const [Vehicle, setVehicle] = useState("Select-one");
  const [Gross, setGross] = useState(0);
  const [Tare, setTare] = useState(0);
  const [Net, setNet] = useState(Gross - Tare);
  const [Charge, setCharge] = useState(0);
  const [Type, setType] = useState(null);
  const [Cashior, setCashior] = useState("Select-one");

  const purchaserHandler = (e) => {};
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#`f5f5f5`",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingHorizontal: 30,
            paddingVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Sora-Medium",
                color: "rgba(54, 79, 107,1)",
              }}
            >
              Serial No. : 1236
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Sora-Medium",
                color: "rgba(54, 79, 107,1)",
              }}
            >
              Date : 10/8/2020
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            backgroundColor: "#a6e3e9",
            elevation: 3,
            borderRadius: 10,
            marginVertical: 10,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputTextBox title="Seller" subtitle={seller} />
          <InputTextBox
            title="purchaser"
            subtitle={Purchaser}
            isTextInput={true}
            textHandler={purchaserHandler}
          />
          <InputSelectBox title="Items" subtitle={items} />
          <InputSelectBox title="Vehicle-name" subtitle={Vehicle} />
        </View>

        <View
          style={{
            width: "90%",
            backgroundColor: "#bbded6",

            elevation: 3,
            borderRadius: 10,
            marginVertical: 10,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputSelectBox title={"Gross"} subtitle={Gross} />
          <InputSelectBox title={"Tare"} subtitle={Tare} />
          <InputSelectBox title={"Net"} subtitle={Net} />
        </View>
        <View
          style={{
            width: "90%",
            backgroundColor: "#fae3d9",

            elevation: 3,
            borderRadius: 10,
            marginVertical: 10,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputSelectBox title={"Charge"} subtitle={Charge} />
          <InputSelectBox title={"Type"} subtitle={Type} />
          <InputSelectBox title={"Cashior"} subtitle={Cashior} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
