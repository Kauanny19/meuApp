import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button} from "react-native";
import api from "../axios/axios";

export default function CadastrarIngresso({navigation}) {
  const [ingresso, setIngresso] = useState({
    preco:"", 
    tipo:"", 
    fk_id_evento:"",
  });

  async function handleIngresso(){
    await api.postIngresso(ingresso).then(
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
        <Text style={styles.title}>Cadastre um Ingresso</Text>
        <TextInput 
        style={styles.input}
        placeholder="Preço"
        value={ingresso.preco}
        onChangeText={(value)=> {setIngresso({...ingresso, preco:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Tipo"
        value={ingresso.tipo}
        onChangeText={(value)=> {setIngresso({...ingresso, tipo:value})}}
        />
        <TextInput 
        style={styles.input}
        placeholder="Id Evento"
        value={ingresso.fk_id_evento}
        onChangeText={(value)=> {setIngresso({...ingresso, fk_id_evento:value})}}
        />
        
        <TouchableOpacity onPress={handleIngresso} style={styles.button}>
            <Text>Cadastrar</Text>
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
    borderRadius:5
  }
});
