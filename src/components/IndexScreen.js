import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

export default function App(props){
    
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableHighlight onPress={()=>props.navigation.navigate('Quiz')}>
                 <Text style={styles.button}>Play</Text>
            </TouchableHighlight>  
        </View>
    )
    
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        fontSize: 25,
        textAlign: 'center',
        padding: 10
    }
})