import React from "react";
import { CarrosAtivos, ContainerAtivos, Inputentrada, Inputplaca, Logo, Menu, Navegacao, TextoCarros } from "./styles";


export default function Ativos() {
    return (
        <CarrosAtivos>
            <Navegacao>
                <Logo source={require('../../assets/logo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
            </Navegacao>
            <TextoCarros>Carros ativos</TextoCarros>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
            </ContainerAtivos>
            <ContainerAtivos>
                <Inputplaca>Placa:</Inputplaca> 
                <Inputentrada>Entrada:</Inputentrada>
            </ContainerAtivos>
        </CarrosAtivos>
    )
}

