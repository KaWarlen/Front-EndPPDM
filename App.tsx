import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import CadastroFluxo from './components/CadastroFluxo';
import TelaAluno from './components/TelaAluno';
import AreaTreinador from './components/AreaTreinador';
import DetalheTreino from './components/DetalheTreino';
import TreinosCliente from './components/TreinosCliente';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: 'none', // Desabilita animações
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroFluxo} />
        <Stack.Screen name="TelaAluno" component={TelaAluno} />
        <Stack.Screen name="DetalheTreino" component={DetalheTreino} />
        <Stack.Screen name="AreaTreinador" component={AreaTreinador} />
        <Stack.Screen name="TreinosCliente" component={TreinosCliente} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
