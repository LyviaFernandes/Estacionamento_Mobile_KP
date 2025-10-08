import React from "react";
import { FlatList } from "react-native";
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

  const historicoData = [
    { id: '1', placa: 'ABC-1234', entrada: '07:48 29-09-2025', saida: '17:15 29-09-2025', valor: '80,00' },
    { id: '2', placa: 'XYZ-9876', entrada: '09:25 30-09-2025', saida: '11:47 30-09-2025', valor: '20,00' },
    { id: '3', placa: 'JKL-4567', entrada: '07:15 30-09-2025', saida: '07:59 30-09-2025', valor: '8,00' },
    { id: '4', placa: 'MNO-3210', entrada: '10:54 31-09-2025', saida: '12:15 31-09-2025', valor: '20,00' },
    { id: '5', placa: 'QRS-7890', entrada: '11:38 31-09-2025', saida: '16:24 31-09-2025', valor: '30,00' },
    { id: '6', placa: 'DEF-1111', entrada: '08:15 02-10-2025', saida: '10:45 02-10-2025', valor: '15,00' },
  ];

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
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
    </HistoricoContainer>
  );
}
