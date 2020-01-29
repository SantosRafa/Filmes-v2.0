import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    ImageBackground
} from 'react-native';


export default class Filmes extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{alert('Filme: '+ this.props.data.nome)}} underlayColor="#CCC">
                    <ImageBackground 
                    source={{uri:this.props.data.foto}}
                    style={styles.photo}
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{this.props.data.nome}</Text>    
                        </View>

                    </ImageBackground>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    photo:{
        height:150,
        resizeMode:'cover'
    },

    name:{
        fontSize:23,
        color:'#FFF',
        fontWeight:'bold'
    },

    textContainer:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft:10,
        paddingBottom:10
    },
    
})