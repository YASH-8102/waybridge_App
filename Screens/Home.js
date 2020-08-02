import "react-native-get-random-values";

import {
  ActivityIndicator,
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
import React, { createRef, useEffect, useRef, useState } from "react";

import AnimatedButton from "../Components/AnimatedButton";
import BgMask from "../Components/BgMask";
import CardContainer from "../Components/CardContainer";
import Header from "../Components/Header";
import InputSelectBox from "../Components/InputSelectBox";
import InputTextBox from "../Components/InputTextBox";
import ListContainer from "../Components/ListContainer";
import ListItem from "../Components/ListItem";
import { log } from "react-native-reanimated";
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
const Vehicles = [
  { name: "Bus", id: uuidv1() },
  { name: "Car", id: uuidv1() },
  { name: "Train", id: uuidv1() },
  { name: "Bikee", id: uuidv1() },
  { name: "BMW", id: uuidv1() },
  { name: "Ferrari", id: uuidv1() },
  { name: "Lambo", id: uuidv1() },
  { name: "splender", id: uuidv1() },
  { name: "city", id: uuidv1() },
];
const Charges = [
  { name: "10", id: uuidv1() },
  { name: "20", id: uuidv1() },
  { name: "30", id: uuidv1() },
];
const Types = [
  { name: "Cash", id: uuidv1() },
  { name: "Baki", id: uuidv1() },
  { name: "Yash", id: uuidv1() },
  { name: "Umang", id: uuidv1() },
];
const Cashiors = [
  { name: "NimeshBhai", id: uuidv1() },
  { name: "NikeshBhai", id: uuidv1() },
  { name: "PrafulBhai", id: uuidv1() },
];
export default function Home() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [seller, setSeller] = useState("Enter Seller Name");
  const [Purchaser, setPurchaser] = useState("Enter Purchaser Name");
  const [items, setitems] = useState("Select-one");
  const [Vehicle, setVehicle] = useState("Select-one");
  const [Gross, setGross] = useState(0);
  const [Tare, setTare] = useState(0);
  const [Net, setNet] = useState(Gross - Tare);
  const [Charge, setCharge] = useState(0);
  const [Type, setType] = useState("Select-one");
  const [Cashior, setCashior] = useState("Select-one");
  const ref1 = createRef();
  const ref2 = createRef();
  const Grossref = createRef();
  const Tareref = createRef();
  const Netref = createRef();
  const [ScrollRef, setScrollRef] = useState(null);
  const [modelVisible, setmodelVisible] = useState(false);
  const [activeId, setactiveId] = useState(null);
  const [popupList, setpopupList] = useState(null);
  const [activeTab, setactiveTab] = useState();

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
    e == "" || parseInt(e) == NaN ? (e = 0) : (e = parseInt(e));
    e = parseInt(e);
    setGross(e);
  };
  const tareHandler = (e) => {
    e == "" || parseInt(e) == NaN ? (e = 0) : (e = parseInt(e));
    setTare(e);
  };
  const netHandler = (e) => {
    setNet(parseInt(Gross) - parseInt(Tare));
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

  const getData = () => {
    const obj = {
      Seller: seller,
      Purchaser: Purchaser,
      Item: items,
      Vehicle: Vehicle,
      Gross: Gross,
      Tare: Tare,
      Net: Net,
      Charge: Charge,
      Type: Type,
      Cashior: Cashior,
    };
    return obj;
  };

  const setStates = ({ activeItem }) => {
    switch (activeTab) {
      case "_Items":
        setitems(activeItem);
        break;
      case "_Vehicles":
        setVehicle(activeItem);
        break;

      case "_Charges":
        setCharge(activeItem);
        break;
      case "_Types":
        setType(activeItem);
        break;
      case "_Cashior":
        setCashior(activeItem);
        break;

      default:
        break;
    }
  };

  const JumpToNext = () => {
    switch (activeTab) {
      case "_Items":
        setactiveTab("_Vehicles");
        break;
      case "_Vehicles":
        setactiveTab("_Gross");
        break;

      case "_Charges":
        setactiveTab("_Types");
        break;
      case "_Types":
        setactiveTab("_Cashior");
        break;
      case "_Cashior":
        setpopupList(null);
        stopAnim();
        setactiveTab(null);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    console.log(activeTab);
    switch (activeTab) {
      case "_Items":
        startAnim();
        setpopupList(Items);
        break;
      case "_Vehicles":
        startAnim();
        setpopupList(Vehicles);
        break;
      case "_Gross":
        stopAnim();
        Grossref.current.focus();
        break;

      case "_Charges":
        startAnim();
        setpopupList(Charges);
        break;
      case "_Types":
        startAnim();
        setpopupList(Types);
        break;
      case "_Cashior":
        startAnim();
        setpopupList(Cashiors);
        break;

      default:
        break;
    }
  }, [activeTab, modelVisible]);
  useEffect(() => {
    netHandler();
  }, [Gross, Tare]);

  const upanim = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(0)).current;

  const startAnim = () => {
    setmodelVisible(true);
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
    setpopupList(null);
    setactiveTab("");

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
        {popupList ? (
          <View style={{ justifyContent: "space-between", height: "100%" }}>
            <View style={{ maxHeight: windowHeight * 0.6 * 0.8 }}>
              <ListContainer title={activeTab}>
                {popupList.map(({ name, id }) => {
                  return (
                    <ListItem
                      itemName={name}
                      activeId={activeId}
                      id={id}
                      key={id}
                      click={(obj) => {
                        console.log(obj);
                        setStates(obj);
                        setactiveId(obj.activeId);
                      }}
                    />
                  );
                })}
              </ListContainer>
            </View>

            <View
              style={{
                width: "100%",
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimatedButton
                click={() => {
                  setpopupList(null);
                  console.log(activeTab);
                  JumpToNext();
                }}
                color={"#a6e3e9"}
                title={"Next"}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={"large"} color={"#a6e3e9"} />
          </View>
        )}
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
              textHandler={sellerHandler}
              returnKeyType={"next"}
              blurOnSubmit={false}
              title="Seller"
              subtitle={"Enter Name"}
              ref={ref1}
              onSubmitEditing={() => {
                ref2.current.focus();
              }}
            />
            <InputTextBox
              textHandler={purchaserHandler}
              title="purchaser"
              subtitle={"Enter Name"}
              ref={ref2}
              onSubmitEditing={() => {
                setactiveTab("_Items");
              }}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("_Items");
              }}
              title="Items"
              subtitle={items}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("_Vehicles");
              }}
              title="Vehicle-name"
              subtitle={Vehicle}
            />
          </CardContainer>

          <CardContainer color={"#bbded6"}>
            <InputTextBox
              keyboardType={"numeric"}
              textHandler={grossHandler}
              title="Gross"
              subtitle={"0"}
              returnKeyType={"next"}
              blurOnSubmit={false}
              ref={Grossref}
              onSubmitEditing={() => {
                ScrollRef.scrollTo({ y: 160, animated: true });
                Tareref.current.focus();
              }}
            />
            <InputTextBox
              keyboardType={"numeric"}
              textHandler={tareHandler}
              title="Tare"
              subtitle={"0"}
              isTextInput={true}
              ref={Tareref}
              returnKeyType={"next"}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                setactiveTab("_Charges");
              }}
            />
            <InputTextBox
              title="Net"
              subtitle={Net.toString()}
              editable={false}
            />
          </CardContainer>
          <CardContainer color={"#fae3d9"}>
            <InputSelectBox
              click={() => {
                setactiveTab("_Charges");
              }}
              title={"Charge"}
              subtitle={Charge}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("_Types");
              }}
              title={"Types"}
              subtitle={Type}
            />
            <InputSelectBox
              click={() => {
                setactiveTab("_Cashior");
              }}
              title={"Cashior"}
              subtitle={Cashior}
            />
          </CardContainer>
          <View
            style={{
              marginBottom: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimatedButton
              click={() => {
                console.log(getData());
              }}
              width={"80%"}
              color={"rgba(54, 79, 107,0.7)"}
              title={"Next"}
              textcolor={"#FFF"}
              ripple={"rgba(255,255,255,0.1)"}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
