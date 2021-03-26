import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default class Score extends React.Component{
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.score}>Score: {this.props.score}</Text>
                <Button title="Reset" onPress={this.props.onReset}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    score:{
        backgroundColor: 'lightcyan',
        fontSize: 50,
        textShadowColor: 'rgba(255,0,0,0.3)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10,
        textAlign:'center'
    },
    screen:{
        marginTop: 200 ,
        justifyContent: 'center'
    }
})