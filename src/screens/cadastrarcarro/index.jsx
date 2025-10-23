import React, { useState } from "react";
import axios from "axios";
import { Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
  Btn, 
  TextVoltar, 
  Button, 
  ContainerSaida, 
  InputSaida, 
  Logo, 
  Menu, 
  Navegacao, 
  SaidaContainer, 
  TextButton, 
  TextoSaida 
} from "./styles";

export default function CadastrarCarro() {
  const navigation = useNavigation();
  const [placa, setPlaca] = useState("");

  const handleCadastrar = async () => {
    if (!placa) {
      Alert.alert("Erro", "Digite a placa do veículo.");
      return;
    }

    try {
      const response = await axios.post(
        "https://parkingapisenai.azurewebsites.net/api/veiculos/entrada",
        { placa: placa.toUpperCase() }, // envia no formato correto
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Alert.alert("Sucesso", response.data.mensagem);
      navigation.navigate("Carros Ativos");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Erro", error.response.data?.mensagem || "Falha ao cadastrar.");
      } else {
        Alert.alert("Erro", "Não foi possível conectar à API.");
      }
    }
  };

  return (
    <SaidaContainer>
      <Navegacao>
        <Logo source={require("../../assets/logo.png")} />
        <Btn onPress={() => navigation.openDrawer()}>
          <Menu source={require("../../assets/menu.png")} />
        </Btn>
      </Navegacao>

      <TextoSaida>Entrada de veículo</TextoSaida>

      <ContainerSaida>
        <InputSaida
          placeholder="Placa"
          value={placa}
          onChangeText={setPlaca}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Carros Ativos")}>
          <TextVoltar>Voltar</TextVoltar>
        </TouchableOpacity>
      </ContainerSaida>

      <Button>
        <TouchableOpacity onPress={handleCadastrar}>
          <TextButton>Cadastrar</TextButton>
        </TouchableOpacity>
      </Button>
    </SaidaContainer>
  );
}
