import React from "react";
import { Adicionar, CarrosAtivos, ContainerAtivos, FlatList, Inputentrada, Inputplaca, Logo, Menu, Navegacao, TextoCarros } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function AtivesCar() {
    const navigation = useNavigation();
    return (
        <CarrosAtivos>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
            </Navegacao>
                <TouchableOpacity onPress={() => navigation.navigate("CadCar")}>
                   <Adicionar>Cadastrar carro</Adicionar>
                </TouchableOpacity>
            <TextoCarros>Carros ativos</TextoCarros>
            
                <TouchableOpacity onPress={() => navigation.navigate("saidaCar")}>
                    <ContainerAtivos>
                        <Inputplaca>KDP3L92</Inputplaca> 
                        <Inputentrada>07:15 27-09-2025</Inputentrada>
                    </ContainerAtivos>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("saidaCar")}>
                    <ContainerAtivos>
                        <Inputplaca>MTX5C17</Inputplaca> 
                        <Inputentrada>08:30 27-09-2025</Inputentrada>
                    </ContainerAtivos>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("saidaCar")}>
                    <ContainerAtivos>
                        <Inputplaca>BRQ7F84</Inputplaca> 
                        <Inputentrada>16:38 27-09-2025</Inputentrada>
                    </ContainerAtivos>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("saidaCar")}>
                    <ContainerAtivos>
                        <Inputplaca>ZLH2M35</Inputplaca> 
                        <Inputentrada>12:40 27-09-2025</Inputentrada>
                    </ContainerAtivos>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("saidaCar")}>
                    <ContainerAtivos>
                        <Inputplaca>WEN9T61</Inputplaca> 
                        <Inputentrada>07:59 27-09-2025</Inputentrada>
                    </ContainerAtivos>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("saidaCar")}>
                    <ContainerAtivos>
                        <Inputplaca>XCV1J08</Inputplaca> 
                        <Inputentrada>08:10 27-09-2025</Inputentrada>
                    </ContainerAtivos>
                </TouchableOpacity>
            
        </CarrosAtivos>
    )
}

