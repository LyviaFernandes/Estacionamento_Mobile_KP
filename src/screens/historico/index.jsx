import { HistoricoContainer, InputSaida, InputValorpago, ContainerAtivos, Inputentrada, Inputplaca, Logo, Menu, Navegacao, TextoCarros } from "./styles";


export default function Historico() {
    return (
        <HistoricoContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
            </Navegacao>
            <TextoCarros>Carros ativos</TextoCarros>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
                <InputValorpago>Valor pago:</InputValorpago>
                <InputSaida>Saida:</InputSaida>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
                <InputValorpago>Valor pago:</InputValorpago>
                <InputSaida>Saida:</InputSaida>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
                <InputValorpago>Valor pago:</InputValorpago>
                <InputSaida>Saida:</InputSaida>
            </ContainerAtivos>
            
        </HistoricoContainer>
    )
}

