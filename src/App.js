import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/HomeScreen"
import CadastroEventoScreen from "./screens/CadastroEventoScreen";
import CadastroOrganizadorScreen from "./screens/CadastroOrganizadorScreen";
import CadastroIngressoScreen from "./screens/CadastroIngressoScreen"


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CadastroEvento" component={CadastroEventoScreen} />
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizadorScreen} />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngressoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}