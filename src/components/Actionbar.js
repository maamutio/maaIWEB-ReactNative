import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Actionbar extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <View style={styles.buttons}>
                    <Button title="Previous" onPress={this.props.onPrevious} disabled={this.props.currentQuiz === 0}/>
                    <Button title="Submit" onPress={this.props.onSubmit}/>
                    <Button title="Next" onPress={this.props.onNext} disabled={this.props.currentQuiz === this.props.nQuestions - 1}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});