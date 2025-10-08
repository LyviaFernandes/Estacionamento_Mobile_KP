import { Btn, TextVoltar } from "./styles";
import { Button, ContainerSaida, Inputplaca, InputSaida, Logo, Menu, Navegacao, SaidaContainer, TextButton, TextoSaida, ValorPag } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function CadastrarCarro() {
    const navigation = useNavigation();
    return (
        <SaidaContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Btn onPress={() => navigation.openDrawer()} >
                    <Menu source={require('../../assets/menu.png')}/>
                </Btn>

            </Navegacao>
            <TextoSaida>Entrada de veiculo</TextoSaida>
            <ContainerSaida>
                <InputSaida placeholder="Placa"></InputSaida>
                <InputSaida placeholder="Entrada"></InputSaida>
                <TouchableOpacity onPress={() => navigation.navigate("Carros Ativos")}>
                    <TextVoltar>Voltar</TextVoltar>
                </TouchableOpacity>
            </ContainerSaida>
            <Button>
                 <TouchableOpacity onPress={() => navigation.navigate("Carros Ativos")}>
                 <TextButton>Cadastrar</TextButton>
                    
                </TouchableOpacity>
            </Button>
        </SaidaContainer>
    )
}
