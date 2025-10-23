import styled from "styled-components/native";

export const SaidaContainer = styled.View`
    display: flex;
    background-color:rgb(252, 252, 252);
    align-items: center;
    flex: 1;
`
export const Navegacao = styled.View`
    background-color: #E3A7DE;
    width: 100%;
    height: 93px;
    display: flex;
`
export const Logo = styled.Image`
    margin: 15px;
`
export const Menu = styled.Image`
    width: 48px;
    height: 27px;
    margin-left: 83%;
    margin-top: -68;
    
`
export const Btn = styled.TouchableOpacity``

///////
export const TextoSaida = styled.Text`
    font-size: 24px;
    margin-top: 137px;
    color: #3E043D;
    text-align: center;
    margin-bottom: 38px;
`
export const ContainerSaida = styled.View`
    background-color: #E3A7DE;
    width: 319px;
    height:100px;
    display: flex;
    justify-content: baseline;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    elevation: 6px;
`
export const InputSaida = styled.TextInput`
    color: #A796A6;
    background-color: white;
    font-size: 16px;
    width: 260px;
    height: 36px;
    border-radius: 3px;
    padding-left: 15px;
    margin-bottom: 10px;
    elevation: 3px;
`
export const ValorPag = styled.Text`
    color: #873986;
    font-size: 18px;
    display: flex;
    text-align: center;
    margin-top: 13px;
`
export const Button = styled.TouchableOpacity`
    background-color: #A96ABE;
    width: 213px;
    height: 42px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    elevation: 3px;
`
export const TextButton = styled.Text`
        color: white;
        font-size: 20px;
        margin-top: 5px;

        
`