import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/home/index';
import { Login } from './src/screens/login/index';
import { Register } from './src/screens/register/index';
import { Register2 } from './src/screens/register/register2';
import { HomeSistem } from './src/screens/sistem/index';
import { ServiceAvaliacao, ServiceCuidadores, ServiceCurativo, 
ServiceHigieneCuidado, ServiceMedicamentos, ServiceOrientação, 
ServiceOstomia, ServiceSondagem } from './src/screens/seviceInfo/index';
import { Informacoes } from './src/screens/informacoes/index';
import { Prestadores } from './src/screens/prestadores/index';
import { Agendamento } from './src/screens/agendamento';
import { Carrinho } from './src/screens/carrinho';
import { Pagamento } from './src/screens/pagamento';
import { Confirmacao } from './src/screens/confirmacao';
import { SaibaMais } from './src/screens/saibaMais';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Home Screen" component={HomeScreen} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Login" component={Login} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Register" component={Register} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Register2" component={Register2} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="HomeSistem" component={HomeSistem} />
      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceMedicamentos" component={ServiceMedicamentos} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceAvaliacao" component={ServiceAvaliacao} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceHigieneCuidado" component={ServiceHigieneCuidado} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceOrientacao" component={ServiceOrientação} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceSondagem" component={ServiceSondagem} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceCurativo" component={ServiceCurativo} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceCuidadores" component={ServiceCuidadores} />

      <Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="ServiceOstomia" component={ServiceOstomia} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Informacoes" component={Informacoes} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Prestadores" component={Prestadores} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Agendamento" component={Agendamento} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Carrinho" component={Carrinho} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Pagamento" component={Pagamento} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="Confirmacao" component={Confirmacao} />

<Stack.Screen options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }} name="SaibaMais" component={SaibaMais} />



    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}


