import React from "react";
import Texto from "../../../../components/Texto/Texto";
import styles from "./styles";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function Itens({ titulo, lista }) {
  return (
    <>
      <Texto style={styles.titulo}>{titulo}</Texto>
      {lista.map(({ nome, imagem }) => {
        return (
          <View style={styles.item} key={nome}>
            <Image style={styles.imagem} source={imagem} />
            <Texto style={styles.nome}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
}
