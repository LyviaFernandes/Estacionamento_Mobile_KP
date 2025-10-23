import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { 
    Btn, 
    Button, 
    ContainerSaida, 
    InputSaida, 
    Logo, 
    Menu, 
    Navegacao, 
    SaidaContainer, 
    TextButton, 
    TextoSaida, 
    ValorPag 
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Saida() {
    const navigation = useNavigation();
    const [placa, setPlaca] = useState("");
    const [dadosSaida, setDadosSaida] = useState(null);

    // função para registrar a saída
    const registrarSaida = async () => {
        if (!placa.trim()) {
            Alert.alert("Aviso", "Por favor, digite a placa do veículo.");
            return;
        }

        try {
            const response = await fetch("https://parkingapisenai.azurewebsites.net/api/veiculos/saida", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ placa }),
            });

            const data = await response.json();

            if (!response.ok) {
                Alert.alert("Erro", data.mensagem || "Não foi possível registrar a saída.");
                return;
            }

            setDadosSaida(data.veiculo);

            Alert.alert("Sucesso", data.mensagem);

            // Aqui você pode navegar ou exibir o valor pago
            // navigation.navigate("Historico");
        } catch (error) {
            Alert.alert("Erro", "Falha na comunicação com o servidor.");
            console.error(error);
        }
    };

    return (
        <SaidaContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')} />
                <Btn onPress={() => navigation.openDrawer()}>
                    <Menu source={require('../../assets/menu.png')} />
                </Btn>
            </Navegacao>

            <TextoSaida>Saída</TextoSaida>

            <ContainerSaida>
                <InputSaida
                    placeholder="Placa"
                    value={placa}
                    onChangeText={setPlaca}
                />
                {dadosSaida && (
                    <>
                        <InputSaida value={dadosSaida.horarioEntrada} editable={false} />
                        <InputSaida value={dadosSaida.dataEntrada} editable={false} />
                        <InputSaida value={dadosSaida.horarioSaida} editable={false} />
                        <InputSaida value={dadosSaida.dataSaida} editable={false} />
                        <ValorPag>Valor a pagar: R$ {dadosSaida.valorPago}</ValorPag>
                    </>
                )}
            </ContainerSaida>

            <Button>
                <TouchableOpacity onPress={registrarSaida}>
                    <TextButton>Registrar saída</TextButton>
                </TouchableOpacity>
            </Button>
        </SaidaContainer>
    );
}
