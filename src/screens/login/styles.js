import styled from "styled-components/native";

export const LoginContainer = styled.View`
    flex: 1;
    background-color:rgb(227, 167, 222);
    display: flex;
   
`
export const Logo = styled.Image`
    margin: 15px;
`
export const LoginText = styled.Text`
    color: #3E043D;
    font-size: 24px;
    display: flex;
    text-align: center;
    margin-top: 40%;
`
export const LoginInput = styled.View`
    background-color: #D9D9D9;
    width: 332px;
    height: 287px;
    margin: 40px;
    border-radius: 8px;
    elevation: 6px;
`
export const InputEmail = styled.TextInput`
    color: #A796A6;
    background-color: white;
    font-size: 16px;
    width: 260px;
    height: 42px;
    margin-left: 36px;
    margin-top: 19px;
    border-radius: 3px;
    padding-left: 15px;

`
export const Input = styled.TextInput`
        color: #A796A6;
        background-color: white;
        font-size: 16px;
        width: 260px;
        height: 42px;
        margin-left: 36px;
        margin-bottom: 19px;
        margin-top: 19px;
        border-radius: 3px;
        padding-left: 15px;
`
export const Button = styled.TouchableOpacity`
    background-color: #A96ABE;
    width: 213px;
    height: 42px;
    border-radius: 3px;
    margin-left: 59px;
    elevation: 3px;
`
export const TextButton = styled.Text`
        color: white;
        font-size: 20px;
        margin-top: 5px;
        margin-left: 40%;
        
`
export const InfoLogin = styled.Text`
    color: #3E043D;
    font-size: 15px;
    display: flex;
    text-align: center;
    margin-top: 5px;
`