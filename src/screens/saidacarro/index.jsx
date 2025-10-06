import { Button, ContainerSaida, Inputplaca, InputSaida, Logo, Menu, Navegacao, SaidaContainer, TextButton, TextoSaida, ValorPag } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function Saida() {
    const navigation = useNavigation();
    return (
        <SaidaContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
            </Navegacao>
            <TextoSaida>Saida</TextoSaida>
            <ContainerSaida>
                <InputSaida placeholder="placa"></InputSaida>
                <InputSaida placeholder="hora entrada"></InputSaida>
                <InputSaida placeholder="data entrada"></InputSaida>
                <InputSaida placeholder="hora saida"></InputSaida>
                <InputSaida placeholder="data saida"></InputSaida>
                <ValorPag>Valor a pagar:</ValorPag>
            </ContainerSaida>
            <Button>
                <TouchableOpacity onPress={() => navigation.navigate("Historico")}>
                    <TextButton>Registrar saida</TextButton>
                </TouchableOpacity>
            </Button>
        </SaidaContainer>
    )
}
