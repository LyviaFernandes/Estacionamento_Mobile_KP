import { TextVoltar } from "./styles";
import { Button, ContainerSaida, Inputplaca, InputSaida, Logo, Menu, Navegacao, SaidaContainer, TextButton, TextoSaida, ValorPag } from "./styles";


export default function CadastrarCarro() {
    return (
        <SaidaContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
            </Navegacao>
            <TextoSaida>Saida</TextoSaida>
            <ContainerSaida>
                <InputSaida>Placa</InputSaida>
                <InputSaida>Entrada</InputSaida>
                <TextVoltar>Voltar</TextVoltar>
            </ContainerSaida>
            <Button>
                <TextButton>Cadastrar</TextButton>
            </Button>
        </SaidaContainer>
    )
}
