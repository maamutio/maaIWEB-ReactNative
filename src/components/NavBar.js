import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class NavBar extends React.Component{
    render() {
        return (
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Button title="1" onPress={this.props.onN1} disabled={this.props.currentQuiz===0}/>
                <Button title="2" onPress={this.props.onN2} disabled={this.props.currentQuiz===1}/>
                <Button title="3" onPress={this.props.onN3} disabled={this.props.currentQuiz===2}/>
                <Button title="4" onPress={this.props.onN4} disabled={this.props.currentQuiz===3}/>
                <Button title="5" onPress={this.props.onN5} disabled={this.props.currentQuiz===4}/>
                <Button title="6" onPress={this.props.onN6} disabled={this.props.currentQuiz===5}/>
                <Button title="7" onPress={this.props.onN7} disabled={this.props.currentQuiz===6}/>
                <Button title="8" onPress={this.props.onN8} disabled={this.props.currentQuiz===7}/>
                <Button title="9" onPress={this.props.onN9} disabled={this.props.currentQuiz===8}/>
                <Button title="10" onPress={this.props.onN10} disabled={this.props.currentQuiz===9}/>
            </View>
        );
    }
}