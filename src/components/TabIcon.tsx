import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";

type Props = {
  name: string;
  focused?: boolean;
};

const TabIcon: React.FC<Props> = ({ name, focused }) => (
  <Ionicons
    size={26}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />
);

export default TabIcon;
