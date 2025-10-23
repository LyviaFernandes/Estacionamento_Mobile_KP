import { useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { Button, InfoLogin, Input, InputEmail, LoginContainer, LoginInput, LoginText, Logo, TextButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("https://parkingapisenai.azurewebsites.net/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: senha, // campo que a API espera
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Aqui você pode salvar o token no AsyncStorage se quiser persistir
                console.log("Token:", data.token);
                Alert.alert("Sucesso", "Login realizado!");
                navigation.navigate("CarrosAtivos"); // navega para a próxima tela
            } else {
                Alert.alert("Erro", data.message || "E-mail ou senha incorretos");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível conectar à API");
        }
    };

    return (
        <LoginContainer>
            <Logo source={require('../../assets/logo.png')} />
            <LoginText>Login</LoginText>
            <LoginInput>
                <InputEmail
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <Button>
                    <TouchableOpacity onPress={handleLogin}>
                        <TextButton>Entrar</TextButton>
                    </TouchableOpacity>
                </Button>
                <InfoLogin>Esqueci a senha</InfoLogin>

                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <InfoLogin>Criar conta</InfoLogin>
                </TouchableOpacity>
            </LoginInput>
        </LoginContainer>
    );
}
