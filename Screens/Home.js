import "react-native-get-random-values";

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

import BgMask from "../Components/BgMask";
import CardContainer from "../Components/CardContainer";
import Header from "../Components/Header";
import InputSelectBox from "../Components/InputSelectBox";
import InputTextBox from "../Components/InputTextBox";
import ListContainer from "../Components/ListContainer";
import ListItem from "../Components/ListItem";
import { v1 as uuidv1 } from "uuid";

const Items = [
  { name: "Bhangar", id: uuidv1() },
  { name: "yash", id: uuidv1() },
  { name: "ug", id: uuidv1() },
  { name: "Bhangar", id: uuidv1() },
  { name: "yash", id: uuidv1() },
  { name: "ug", id: uuidv1() },
  { name: "Bhangar", id: uuidv1() },
  { name: "yash", id: uuidv1() },
  { name: "ug", id: uuidv1() },
  { name: "Bhangar", id: uuidv1() },
  { name: "yash", id: uuidv1() },
];
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
  const Grossref = createRef();
  const Tareref = createRef();
  const Netref = createRef();
  const [ScrollRef, setScrollRef] = useState(null);
  const [modelVisible, setmodelVisible] = useState(false);
  const [activeId, setactiveId] = useState(null);

  const sellerHandler = (e) => {
    setSeller(e);
  };
  const purchaserHandler = (e) => {
    setPurchaser(e);
  };
  const itemHandler = (e) => {
    setitems(e);
  };
  const vehicleHandler = (e) => {
    setVehicle(e);
  };
  const grossHandler = (e) => {
    setGross(e);
  };
  const tareHandler = (e) => {
    setTare(e);
  };
  const netHandler = (e) => {
    setNet(Gross + Tare);
  };
  const chargeHandler = (e) => {
    setCharge(e);
  };
  const typeHandler = (e) => {
    setType(e);
  };
  const cashiorHandler = (e) => {
    setCashior(e);
  };

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
        <BgMask
          fade={fade}
          press={() => {
            stopAnim();
          }}
        />
      ) : null}
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: windowHeight * 0.6,
          bottom: -windowHeight * 0.6,
          zIndex: 500,
          backgroundColor: "rgba(255,255,255,1)",
          transform: [{ translateY: upanim }],
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          elevation: 10,
        }}
      >
        <ListContainer>
          {Items.map(({ name, id }) => {
            return (
              <ListItem
                itemName={name}
                activeId={activeId}
                id={id}
                key={id}
                click={(obj) => {
                  setactiveId(obj.activeId);
                }}
              />
            );
          })}
        </ListContainer>
      </Animated.View>
      <ScrollView
        ref={(scroller) => {
          setScrollRef(scroller);
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header />
          <CardContainer color={"#a6e3e9"}>
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
            <InputSelectBox title="Vehicle-name" subtitle={Vehicle} />
          </CardContainer>

          <CardContainer color={"#bbded6"}>
            <InputTextBox
              textHandler={}
              title="Gross"
              subtitle={Gross.toString()}
              returnKeyType={"next"}
              blurOnSubmit={false}
              ref={Grossref}
              onSubmitEditing={() => {
                ScrollRef.scrollTo({ y: 160, animated: true });
                Tareref.current.focus();
              }}
            />
            <InputTextBox
              title="Tare"
              subtitle={Tare.toString()}
              isTextInput={true}
              ref={Tareref}
              returnKeyType={"next"}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                Netref.current.focus();
              }}
            />
            <InputTextBox
              title="Net"
              subtitle={Net.toString()}
              isTextInput={true}
              returnKeyType={"next"}
              blurOnSubmit={true}
              ref={Netref}
              onSubmitEditing={() => {}}
            />
          </CardContainer>
          <CardContainer color={"#fae3d9"}>
            <InputSelectBox title={"Charge"} subtitle={Charge} />
            <InputSelectBox title={"Type"} subtitle={Type} />
            <InputSelectBox title={"Cashior"} subtitle={Cashior} />
          </CardContainer>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
