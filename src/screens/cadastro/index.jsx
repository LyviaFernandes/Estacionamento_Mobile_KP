import { Button, InfoLogin, Input, InputEmail, CadastroContainer, LoginInput, LoginText, Logo, TextButton, InputNome, Inputsenha } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <CadastroContainer>
            <Logo source={require('../../assets/logo.png')}/>
            <LoginText>Cadastro</LoginText>
            <LoginInput>
                <InputNome placeholder="Nome"></InputNome>
                <InputEmail placeholder="E-mail"></InputEmail>
                <Input placeholder="Senha"></Input>
                <Inputsenha placeholder="Confirme sua senha"></Inputsenha>
                <Button>
                    <TouchableOpacity onPress={() => navigation.navigate("CarrosAtivos")}>
                     <TextButton>Entrar</TextButton>
                    </TouchableOpacity>
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <InfoLogin>Ja tenho cadastro</InfoLogin>
                </TouchableOpacity>
            </LoginInput>
        </CadastroContainer>
    )
}

