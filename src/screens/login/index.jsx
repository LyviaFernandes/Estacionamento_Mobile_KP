import { Button, InfoLogin, Input, InputEmail, LoginContainer, LoginInput, LoginText, Logo, TextButton} from "./styles";


export default function Login() {
    return (
        <LoginContainer>
            <Logo source={require('../../assets/logo.png')}/>
            <LoginText>Login</LoginText>
            <LoginInput>
                <InputEmail>E-mail</InputEmail>
                <Input>Senha</Input>
                <Button>
                    <TextButton>Entrar</TextButton>
                </Button>
                <InfoLogin>Esqueci a senha</InfoLogin>
            </LoginInput>
        </LoginContainer>
    )
}

