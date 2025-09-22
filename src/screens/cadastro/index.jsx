import { Button, InfoLogin, Input, InputEmail, CadastroContainer, LoginInput, LoginText, Logo, TextButton, InputNome, Inputsenha } from "./styles";


export default function Cadastro() {
    return (
        <CadastroContainer>
            <Logo source={require('../../assets/logo.png')}/>
            <LoginText>Cadastro</LoginText>
            <LoginInput>
                <InputNome>Nome</InputNome>
                <InputEmail>E-mail</InputEmail>
                <Input>Senha</Input>
                <Inputsenha>Confirme sua senha</Inputsenha>
                <Button>
                    <TextButton>Entrar</TextButton>
                </Button>
                <InfoLogin>Já tenho cadastro</InfoLogin>
            </LoginInput>
        </CadastroContainer>
    )
}

