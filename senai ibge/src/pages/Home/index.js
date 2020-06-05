import React, {useEffect, useState} from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

import SearchController from '../../Controller/SearchController';

export default function Home({navigation}){
  const [name, setName] = useState('');
  const [year, setYear] = useState(0);
  return(
    <KeyboardAvoidingView style={styles.fora}>
        <View style={styles.logo}>
          <Text style={styles.well}>Senai</Text>
          <Text style={styles.ibge}>IBGE</Text>
        </View>
        <View style={styles.dentro}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              onChangeText={(name) => {setName(name);}}
            />

            <TextInput
              style={styles.input}
              placeholder="Ano De Nascimento"
              onChangeText={(year) => {setYear(year);}}
            />

            <TouchableOpacity style={styles.submit} onPress={() => { SearchController(name, year, navigation); }}>
              <Text style={styles.submitText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fora:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
  },
  dentro:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    backgroundColor:'black',
  },
  logo:{
    marginTop:100,
    justifyContent:'center',
  },
  well:{
    fontSize:40,
    color:'#FFF'
  },
  ibge:{
    fontSize:35,
    textAlign:'center',
    color:'#FFF',
  },
  input:{
    backgroundColor:'#FFF',
    width:'90%',
    height:'7%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10,
  },
  submit:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,

  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  }
});
