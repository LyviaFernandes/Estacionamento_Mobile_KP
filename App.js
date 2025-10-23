import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa as telas
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import CadastrarCarro from './src/screens/cadastrarcarro';
import AtivesCar from './src/screens/carrosativos';
import Historico from './src/screens/historico';
import Saida from './src/screens/saidacarro';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 🔹 Stack de autenticação
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

// 🔹 Menu lateral (Drawer)
function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#D7B5D4',
          width: 240,
        },
        drawerLabelStyle: {
          color: '#770075',
          fontSize: 16,
        },
        drawerActiveBackgroundColor: '#EAD6E8',
        drawerInactiveTintColor: '#ccc',
      }}
    >
  <Drawer.Screen name="Carros Ativos" component={AtivesCar} />
  <Drawer.Screen name="Cadastrar Carro" component={CadastrarCarro} />
  <Drawer.Screen name="Saida" component={Saida} />
  <Drawer.Screen name="Historico" component={Historico} />
</Drawer.Navigator>
  );
}

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <NavigationContainer>
        {/* <AuthStack/> */}
        <AppDrawer/>
      </NavigationContainer>
    </ContainerApp>
  );
}
