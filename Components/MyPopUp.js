import React, { useRef } from "react";
import { StyleSheet, Text, View, Modal, Animated } from "react-native";

export default function MyPopUp(props) {
  const upanim = useRef(new Animated.Value(0)).current;

  const startAnim = () => {
    Animated.timing(upanim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Modal
      visible={props.visible}
      statusBarTranslucent
      transparent={true}
      animationType="none"
      onShow={startAnim}
    >
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: 500,
          bottom: 100,
          backgroundColor: "rgba(0,0,0,0.5)",
          transform: [{ translateY: upanim }],
        }}
      ></Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
