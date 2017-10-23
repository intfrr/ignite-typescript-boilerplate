import * as React from "react";
import { Text, ViewStyle, TouchableOpacity } from "react-native";
import ExamplesRegistry from "../Services/ExamplesRegistry";
import styles from "./Styles/FullButtonStyles";

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Full Button", () => (
  <FullButton
    text="Hey there"
    // tslint:disable-next-line:jsx-no-lambda
    onPress={() => window.alert("Full Button Pressed!")}
  />),
);

interface Props {
    onPress?: () => void;
    style?: ViewStyle;
    text?: string;
}

const FullButton = ({text, style, onPress = () => {}}:Props) => {
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{text && text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
}
export default FullButton;