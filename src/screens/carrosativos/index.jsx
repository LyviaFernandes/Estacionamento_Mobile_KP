import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
  Adicionar, 
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

  // 🔹 Dados simulados dos carros ativos
  const carrosAtivosData = [
    { id: "1", placa: "KDP3L92", entrada: "07:15 27-09-2025" },
    { id: "2", placa: "MTX5C17", entrada: "08:30 27-09-2025" },
    { id: "3", placa: "BRQ7F84", entrada: "16:38 27-09-2025" },
    { id: "4", placa: "ZLH2M35", entrada: "12:40 27-09-2025" },
    { id: "5", placa: "WEN9T61", entrada: "07:59 27-09-2025" },
    { id: "6", placa: "XCV1J08", entrada: "08:10 27-09-2025" },
  ];

  // 🔹 Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Saida")}>
      <ContainerAtivos>
        <Inputplaca>{item.placa}</Inputplaca>
        <Inputentrada>{item.entrada}</Inputentrada>
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

      {/* 🔹 FlatList para listar os carros ativos */}
      <FlatList
        data={carrosAtivosData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </CarrosAtivos>
  );
}
