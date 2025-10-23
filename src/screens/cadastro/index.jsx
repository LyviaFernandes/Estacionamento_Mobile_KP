import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  InfoLogin,
  Input,
  InputEmail,
  CadastroContainer,
  LoginInput,
  LoginText,
  Logo,
  TextButton,
  InputNome,
  Inputsenha
} from "./styles";

export default function Cadastro() {
  const navigation = useNavigation();

  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para enviar os dados à API
  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("https://parkingapisenai.azurewebsites.net/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          password: senha,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuário cadastrado:", data);
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("AtivesCar");
      } else {
        const error = await response.text();
        console.error("Erro:", error);
        Alert.alert("Erro no cadastro", "Não foi possível cadastrar. Verifique os dados e tente novamente.");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <CadastroContainer>
      <Logo source={require("../../assets/logo.png")} />
      <LoginText>Cadastro</LoginText>
      <LoginInput>
        <InputNome
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <InputEmail
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Inputsenha
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button>
          <TouchableOpacity onPress={handleRegister}>
            <TextButton>Entrar</TextButton>
          </TouchableOpacity>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <InfoLogin>Já tenho cadastro</InfoLogin>
        </TouchableOpacity>
      </LoginInput>
    </CadastroContainer>
  );
}
