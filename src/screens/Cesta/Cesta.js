import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";

import Topo from "./components/Topo/Topo";
import Detalhes from "./components/Detalhes/Detalhes";
import Itens from "./components/Itens/Itens";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={styles.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  );
}
