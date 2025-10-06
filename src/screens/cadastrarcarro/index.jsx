import { TextVoltar } from "./styles";
import { Button, ContainerSaida, Inputplaca, InputSaida, Logo, Menu, Navegacao, SaidaContainer, TextButton, TextoSaida, ValorPag } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function CadastrarCarro() {
    const navigation = useNavigation();
    return (
        <SaidaContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <TouchableOpacity onPress={() => navigation.getParent()?.openDrawer()}>
                    <Menu source={require('../../assets/menu.png')}/>
                </TouchableOpacity>

            </Navegacao>
            <TextoSaida>Entrada de veiculo</TextoSaida>
            <ContainerSaida>
                <InputSaida placeholder="Placa"></InputSaida>
                <InputSaida placeholder="Entrada"></InputSaida>
                <TouchableOpacity onPress={() => navigation.navigate("CarrosAtivos")}>
                    <TextVoltar>Voltar</TextVoltar>
                </TouchableOpacity>
            </ContainerSaida>
            <Button>
                 <TouchableOpacity onPress={() => navigation.navigate("CarrosAtivos")}>
                 <TextButton>Cadastrar</TextButton>
                    
                </TouchableOpacity>
            </Button>
        </SaidaContainer>
    )
}
