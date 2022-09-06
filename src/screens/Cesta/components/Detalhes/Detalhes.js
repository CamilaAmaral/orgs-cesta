import React from "react";
import Texto from "../../../../components/Texto/Texto";
import styles from "./styles";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>

      <View style={styles.fazenda}>
        <Image style={styles.imagemFazenda} source={logoFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>

      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>{botao}</Text>
      </TouchableOpacity>
    </>
  );
}
