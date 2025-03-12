import {View, Text, StyleSheet, Button} from "react-native";


export default function Home({navigation}) {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Bem vindo!</Text>
        <Button title="Cadastrar Organizador" onPress={()=> navigation.navigate("CadastroOrganizador")}/>
        <Button title="Cadastrar Evento" onPress={()=> navigation.navigate("CadastroEvento")}/>
        <Button title="Cadastrar Ingresso" onPress={()=> navigation.navigate("CadastroIngresso")}/>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize:28,
    fontWeight: 'bold',
  },
  
});
