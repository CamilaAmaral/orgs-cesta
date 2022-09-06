import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },

  botao: {
    marginTop: 26,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },

  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});

export default styles;
