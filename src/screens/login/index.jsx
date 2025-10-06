import { TouchableOpacity } from "react-native";
import { Button, InfoLogin, Input, InputEmail, LoginContainer, LoginInput, LoginText, Logo, TextButton} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Cadastro from "../cadastro";

export default function Login() {
    const navigation = useNavigation();
    return (
        
        <LoginContainer>
            <Logo source={require('../../assets/logo.png')}/>
            <LoginText>Login</LoginText>
            <LoginInput>
                <InputEmail placeholder="E-mail"></InputEmail>
                <Input placeholder="Senha"></Input>
                <Button>
                  <TouchableOpacity onPress={() => navigation.navigate("CarrosAtivos")}>
                    <TextButton>Entrar</TextButton>
                </TouchableOpacity>
                </Button>
                <InfoLogin>Esqueci a senha</InfoLogin>

                  <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <InfoLogin>Criar conta</InfoLogin>
                </TouchableOpacity>
            </LoginInput>
        </LoginContainer>
    )
}

