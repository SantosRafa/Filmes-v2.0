import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  FlatList
} from 'react-native';

import Filmes from './Filmes'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmes:[]
    }
    fetch('https://sujeitoprogramador.com/rn-filmes/?api=filmes')
    .then((r)=>r.json())
    .then((json)=>{
      let state = this.state;
      state.filmes = json;
      this.setState(state);
    })
  }
  render(){
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.Text}>Filmes Recomendados</Text>
          </View>

          <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item})=> <Filmes data={item} />}
          
          />
        </View>

        
  )};
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  header:{
    justifyContent: 'center',
    backgroundColor: '#007f98',
    height:80,
  },

  Text:{
    color:'#fff',
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5
  }
});
