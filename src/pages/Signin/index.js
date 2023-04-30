import React from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity,image } from 'react-native'

export default function Signin() {
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}> Bem-vindo(a) ao MusicLife</Text>  
            </View>
       
        
            <View style = {styles.containerForm}>
                <Text style={styles.title}> Email</Text>
                <TextInput placeholder="Digite um email..." 
                style={styles.input}/>

                <Text style={styles.title}> Senha</Text>
                <TextInput placeholder="Sua senha..." 
                    style={styles.input}/>


                <TouchableOpacity style={styles.button}>
                    <Text style= {styles.buttonText} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.buttonRegister}>
                    <Text style= {styles.registerText} >Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>

         </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1E1E1E'
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
       
        flex:1,
        paddingStart:'5%',
        paddingEnd: '5%'
    },
    title:{
        color:'#fff',
        fontSize:20,
        marginTop: 28,
        
    },
    input:{
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        height:40,
        width: 322,
        marginBottom:12,
        fontSize: 16,
        
    },
    button:{
        backgroundColor:'#00FF00',
        width: 322,
        height:52,
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText:{
        collor: '#000000',
        fontSize:18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        allingSelf: 'center'
    },
    registerText:{
        color:'#a1a1a1'
    }






})

