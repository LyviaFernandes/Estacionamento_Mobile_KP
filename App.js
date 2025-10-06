import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Login from './src/screens/login';
import CadastrarCarro from './src/screens/cadastrarcarro';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/screens/cadastro';
import AtivesCar from './src/screens/carrosativos';
import Historico from './src/screens/historico';
import Saida from './src/screens/saidacarro';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: Login,
    Cadastro: Cadastro,
    CarrosAtivos: AtivesCar,
    Historico: Historico,
    CadCar: CadastrarCarro,
    saidaCar: Saida,
  },
});

const Navigation = createStaticNavigation(RootStack);

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
        <Navigation/>

    </ContainerApp>
  );
}