import * as React from "react";
import { View } from "react-native";
import SearchInput from "../SearchInput";

export default function StyledInput() {
  return (
    <View>
      <SearchInput placeholder={"search"} />
    </View>
  );
}
