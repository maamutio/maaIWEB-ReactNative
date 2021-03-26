import React from "react";
import { StyleSheet, TextInput, View, Image, Text, Dimensions } from 'react-native';

export default class Info extends React.Component{
    render() {
        return (
            <View>
                <Image style={styles.questionImg} source={{uri: this.props.quiz.attachment?.url }} alt="city"/>
                <Text style={styles.autor}>Author: {this.props.quiz.author?.username}</Text>
                <Image style={styles.authorImg} source={{uri:this.props.quiz.author?.photo?.url}} alt="autor"/>          
            </View>
        );
    }
}

const styles=StyleSheet.create({
    questionImg: {
        width: Dimensions.get('window').width,
        height:250,
        justifyContent: 'center'
    },
    authorImg:{
        width:50,
        height:50
    },
    autor:{
        fontSize:20
    }
});