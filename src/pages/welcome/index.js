
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    
    } from 'react-native' 

import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
          
            <View style={styles.containerLogo}>
                
                <Image
                source={require('../../assets/logo.png')}
                style={{width:'100%'}}
                resizeMode= "contain"
                />
            </View>

            <View  style={styles.containerForm}>
                <Text style={styles.title}> Escute musicas de qualidade  </Text>
                <Text style={styles.text}> Faça Login para começar</Text>

                <TouchableOpacity 
                style= {styles.button}
                onPress={ () => navigation.navigate('Signin')}>
                    <Text style ={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </View>


         </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:'80%',
        flexx:1,
        backgroundColor: '#1E1E1E'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius : 25,
        borderTopRightRadius: '25',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#00FF00',
        borderRadius: '50',
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#1E1E1E'
    }
})
