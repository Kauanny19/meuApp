import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button} from "react-native";
import api from "../axios/axios";

export default function CadastrarOrganizador({navigation}) {
  const [organizador, setOrganizador] = useState({
    nome: "",
    email: "",
    telefone:"",
    senha: "",
  });

  async function handleOrganizador(){
    await api.postOrganizador(organizador).then(
        (response)=>{
            console.log(response.data.message)
            Alert.alert('OK', response.data.message)
            navigation.navigate("Home")
        },(error)=>{
            Alert.alert('Erro', error.response.data.error)
        }
    )
  }

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Cadastre um Organizador</Text>
        <TextInput 
        style={styles.input}
        placeholder="Nome"
        value={organizador.nome}
        onChangeText={(value)=> {setOrganizador({...organizador, nome:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Email"
        value={organizador.email}
        onChangeText={(value)=> {setOrganizador({...organizador, email:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="CPF"
        value={organizador.telefone}
        onChangeText={(value)=> {setOrganizador({...organizador, telefone:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value)=> {setOrganizador({...organizador, senha:value})}}
        />
        <TouchableOpacity onPress={handleOrganizador} style={styles.button}>
            <Text>Cadastrar Organizador</Text>
        </TouchableOpacity>
        <Button title="Voltar para Home" onPress={()=> navigation.navigate("Home")}/>
        
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
    fontWeight: 'bold'
  },
  input:{
    width:'100%',
    height:40,
    borderBottomWidth:1,
    marginBottom:20,
    paddingHorizontal:10
  },
  button:{
    backgroundColor:'royalblue',
    padding:10,
    borderRadius:5,
    textDecorationColor:"white"
  }
});
