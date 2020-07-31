import {
  Animated,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useRef } from "react";

import MyAnimation from "../Assets/Animations";
import Values from "../Assets/shortcut";

export default function AnimatedButton(props) {
  const scalAnim = useRef(new Animated.Value(1)).current;

  const _start = () => {
    MyAnimation(scalAnim, 0.95, 100).start();
  };
  const _stop = () => {
    MyAnimation(scalAnim, 1, 100).start();
  };

  return (
    <Animated.View
      style={[
        {
          width: props.width ? props.width : 200,
          height: props.height ? props.height : 50,
          borderRadius: props.height ? props.height / 2 : 25,
          backgroundColor: props.color ? props.color : "#FFFFFF",
          marginVertical: 10,
          elevation: 3,
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
        background={TouchableNativeFeedback.Ripple(props.ripple, true)}
      >
        <View
          style={{
            height: props.height ? props.height : 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "yn",
              fontSize: 22,
              color: props.textcolor,
              textAlign: "center",
            }}
          >
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
