import React from "react";
import { Image } from "react-native";
import Texto from "../../../../components/Texto/Texto";
import topo from "../../../../../assets/topo.png";
import styles from "./styles";

export default function Topo({titulo}) {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  );
}
