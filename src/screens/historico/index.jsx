import { HistoricoContainer, InputSaida, InputValorpago, ContainerAtivos, Inputentrada, Inputplaca, Logo, Menu, Navegacao, TextoCarros, ContainerLine } from "./styles";


export default function Historico() {
    return (
        <HistoricoContainer>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
            </Navegacao>
            <TextoCarros>Historico de carros</TextoCarros>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>Placa:</Inputplaca> 
                    <Inputentrada>Entrada:</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>Valor pago:</InputValorpago>
                    <InputSaida>Saida:</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>Placa:</Inputplaca> 
                    <Inputentrada>Entrada:</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>Valor pago:</InputValorpago>
                    <InputSaida>Saida:</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>Placa:</Inputplaca> 
                    <Inputentrada>Entrada:</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>Valor pago:</InputValorpago>
                    <InputSaida>Saida:</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>Placa:</Inputplaca> 
                    <Inputentrada>Entrada:</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>Valor pago:</InputValorpago>
                    <InputSaida>Saida:</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>Placa:</Inputplaca> 
                    <Inputentrada>Entrada:</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>Valor pago:</InputValorpago>
                    <InputSaida>Saida:</InputSaida>
                </ContainerLine>
            </ContainerAtivos>

            
        </HistoricoContainer>
    )
}

