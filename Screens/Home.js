import {
  Animated,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { createRef, useRef, useState } from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
imp;

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
        delayPressIn={0}
        onPress={props.click}
        style={{ zIndex: 5 }}
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
            zIndex: 5,
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
const InputTextBox = React.forwardRef((props, ref) => {
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
      <TouchableWithoutFeedback onPress={props.click}>
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
                ref={ref}
                onSubmitEditing={props.onSubmitEditing}
                blurOnSubmit={props.blurOnSubmit}
                returnKeyType={props.returnKeyType}
                placeholder={props.subtitle}
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
      </TouchableWithoutFeedback>
    </Animated.View>
  );
});
export default function Home() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
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
  const ref1 = createRef();
  const ref2 = createRef();
  const [modelVisible, setmodelVisible] = useState(false);
  const purchaserHandler = (e) => {};
  const upanim = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(0)).current;

  const startAnim = () => {
    Animated.parallel([
      Animated.timing(upanim, {
        toValue: -windowHeight * 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const stopAnim = () => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(upanim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setmodelVisible(false);
    });
  };
  return (
    <>
      {modelVisible ? (
        <TouchableWithoutFeedback
          onPress={() => {
            stopAnim();
            console.log("yn");
          }}
        >
          <Animated.View
            style={{
              zIndex: 2,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.2)",
              position: "absolute",
              opacity: fade,
            }}
          ></Animated.View>
        </TouchableWithoutFeedback>
      ) : null}
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          maxHeight: windowHeight * 0.6,
          bottom: -windowHeight * 0.6,
          zIndex: 500,
          backgroundColor: "rgba(255,255,255,1)",
          transform: [{ translateY: upanim }],
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          elevation: 10,
        }}
      />
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
            <InputTextBox
              returnKeyType={"next"}
              blurOnSubmit={false}
              title="Seller"
              subtitle={seller}
              ref={ref1}
              onSubmitEditing={() => {
                ref2.current.focus();
              }}
            />
            <InputTextBox
              title="purchaser"
              subtitle={Purchaser}
              isTextInput={true}
              textHandler={purchaserHandler}
              ref={ref2}
              next={() => {}}
            />
            <InputSelectBox
              click={() => {
                setmodelVisible(true);
                startAnim();
              }}
              title="Items"
              subtitle={items}
            />
            <InputSelectBox
              onPress={() => {
                console.log("veh");
              }}
              title="Vehicle-name"
              subtitle={Vehicle}
            />
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
    </>
  );
}

const styles = StyleSheet.create({});
