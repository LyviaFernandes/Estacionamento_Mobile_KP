import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  Btn,
  CarrosAtivos,
  ContainerAtivos,
  Inputentrada,
  Inputplaca,
  Logo,
  Menu,
  Navegacao,
  TextoCarros
} from "./styles";

export default function AtivesCar() {
  const navigation = useNavigation();
  const [carrosAtivos, setCarrosAtivos] = useState([]);

  useEffect(() => {
    buscaCarros();
  }, []);

  function buscaCarros() {
    axios
      .get("https://parkingapisenai.azurewebsites.net/api/veiculos")
      .then((res) => {
        console.log("✅ Dados recebidos:", res.data);
        setCarrosAtivos(res.data);
      })
      .catch((err) => {
        console.error("❌ Erro ao buscar veículos:", err);
      });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Saida", { placa: item.placa })}>
      <ContainerAtivos>
        <Inputplaca>{item.placa}</Inputplaca>
        <Inputentrada>
        {item.dataEntrada} {item.horarioEntrada}
        </Inputentrada>
      </ContainerAtivos>
    </TouchableOpacity>
  );

  return (
    <CarrosAtivos style={{ flex: 1 }}>
      <Navegacao>
        <Logo source={require("../../assets/logo.png")} />
        <Btn onPress={() => navigation.openDrawer()}>
          <Menu source={require("../../assets/menu.png")} />
        </Btn>
      </Navegacao>

      <TextoCarros>Carros ativos</TextoCarros>

      <FlatList
        data={carrosAtivos}
        keyExtractor={(item, index) => item.placa + index} // ✅ usa placa como identificador
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </CarrosAtivos>
  );
}
