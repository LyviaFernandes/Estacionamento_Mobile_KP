import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
  HistoricoContainer, 
  InputSaida, 
  InputValorpago, 
  ContainerAtivos, 
  Inputentrada, 
  Inputplaca, 
  Logo, 
  Menu, 
  Navegacao, 
  TextoCarros, 
  ContainerLine, 
  Btn 
} from "./styles";

export default function Historico() {
  const navigation = useNavigation();
  const [historicoData, setHistoricoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistorico() {
      try {
        // Buscar dados da API
        const response = await fetch("https://parkingapisenai.azurewebsites.net/api/veiculos/placa");
        if (!response.ok) throw new Error("Erro ao buscar dados da API");
        const data = await response.json();

        // Ajustar os dados caso precise de formatação
        const formattedData = data.map((item, index) => ({
          id: item.id || index.toString(), // Garantir que cada item tenha id
          placa: item.placa || "",
          entrada: item.entrada || "",
          saida: item.saida || "",
          valor: item.valor || ""
        }));

        setHistoricoData(formattedData);
      } catch (error) {
        Alert.alert("Erro", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHistorico();
  }, []);

  const renderItem = ({ item }) => (
    <ContainerAtivos>
      <ContainerLine>
        <Inputplaca>{item.placa}</Inputplaca>
        <Inputentrada>{item.entrada}</Inputentrada>
      </ContainerLine>
      <ContainerLine>
        <InputValorpago>{item.valor}</InputValorpago>
        <InputSaida>{item.saida}</InputSaida>
      </ContainerLine>
    </ContainerAtivos>
  );

  // Mostrar loader enquanto carrega
  if (loading) {
    return (
      <HistoricoContainer style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </HistoricoContainer>
    );
  }

  return (
    <HistoricoContainer style={{ flex: 1 }}>
      <Navegacao>
        <Logo source={require('../../assets/logo.png')} />
        <Btn onPress={() => navigation.openDrawer()}>
          <Menu source={require('../../assets/menu.png')} />
        </Btn>
      </Navegacao>

      <TextoCarros>Histórico de carros</TextoCarros>

      <FlatList
        data={historicoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
    </HistoricoContainer>
  );
}
