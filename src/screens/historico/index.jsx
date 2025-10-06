import { HistoricoContainer, InputSaida, InputValorpago, ContainerAtivos, Inputentrada, Inputplaca, Logo, Menu, Navegacao, TextoCarros, ContainerLine } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

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
                    <Inputplaca>ABC-1234</Inputplaca> 
                    <Inputentrada>07:48 29-09-2025</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>80,00</InputValorpago>
                    <InputSaida>17:15 29-09-2025</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>XYZ-9876</Inputplaca> 
                    <Inputentrada>09:25 30-09-2025</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>20,00</InputValorpago>
                    <InputSaida>11:47 30-09-2025</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>JKL-4567</Inputplaca> 
                    <Inputentrada>07:15 30-09-2025</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>8,00</InputValorpago>
                    <InputSaida>07:59 30-09-2025</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>MNO-3210</Inputplaca> 
                    <Inputentrada>10:54 31-09-2025</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>20,00</InputValorpago>
                    <InputSaida>12:15 31-09-2025</InputSaida>
                </ContainerLine>
            </ContainerAtivos>
            <ContainerAtivos>
                <ContainerLine>
                    <Inputplaca>QRS-7890</Inputplaca> 
                    <Inputentrada>11:38 31-09-2025</Inputentrada>
                </ContainerLine>
                <ContainerLine>
                    <InputValorpago>30,00</InputValorpago>
                    <InputSaida>16:24 31-09-2025</InputSaida>
                </ContainerLine>
            </ContainerAtivos>

            
        </HistoricoContainer>
    )
}

