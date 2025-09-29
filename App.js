import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import Ativos from './src/screens/carrosativos';
import Historico from './src/screens/historico';
import Saida from './src/screens/saidacarro';
import CadastrarCarro from './src/screens/cadastrarcarro';


const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      {/* <Login/> */}
      {/* <Cadastro/> */}
      {/* <Ativos/> */}
      {/* <Historico/> */}
      {/* <Saida/> */}
      <CadastrarCarro/>
    </ContainerApp>
  );
}