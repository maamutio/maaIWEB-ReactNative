import React from "react";
import Info from "./Info";
import Play from "./Play";
import Actionbar from "./Actionbar";
import { StyleSheet, View, } from 'react-native';

export default class Game extends React.Component{
    render() {
        return (
            <View>
                <Info style={styles.bar}
                    currentQuiz={this.props.currentQuiz}
                    quiz={this.props.quiz}
                />
                <Play style={styles.bar}
                    currentQuiz={this.props.currentQuiz}
                    quiz={this.props.quiz}
                    onQuestionAnswer={this.props.onQuestionAnswer}
                    onNext={this.props.onNext}
                    onSubmit={this.props.onSubmit}
                    nQuestions={this.props.nQuestions}
                />                
                <Actionbar style={styles.bar}
                    currentQuiz={this.props.currentQuiz}
                    onSubmit={this.props.onSubmit}
                    onNext={this.props.onNext}
                    onPrevious={this.props.onPrevious}
                    nQuestions={this.props.nQuestions}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar:{
        alignContent:'center',
        justifyContent: 'space-evenly',
        alignItems:'flex-end'
    }
});