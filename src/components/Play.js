import React from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';

export default class Play extends React.Component{

    render() {
        return (
            <View>
                <Text style={styles.question}>¿{this.props.quiz.question}?</Text>
                <TextInput type="text"
                    placeholder={' Introduzca Respuesta'}
                    value={this.props.quiz.userAnswer || ''}
                    onChangeText={(e) => this.props.onQuestionAnswer(e)}
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    question:{
        fontSize:30,
        textAlign: 'center'
    },
    input:{
        margin:15,
        borderColor: 'red',
        borderWidth:1
    }
})