
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import Game from "./Game";
import {changeQuiz, initQuizzes, questionAnswer, submit, jumpQuiz} from "../redux/actions";
import Score from "./Score";
import {getAPI, getData, removeData, storeData} from "../../api";
import NavBar from "./NavBar";
import StorageBar from "./StorageBar";
//import ReduxProvider from "./src/redux/ReduxProvider";


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
          loading:true,
          count:100
      };

  }

  render() {
      if (!this.props.finished) {
          return (
              <View style={styles.screen}>
                <NavBar
                            nQuestions={this.props.quizzes.length}
                            currentQuiz={this.props.currentQuiz}
                            onN1={() => this.props.dispatch(jumpQuiz(0))}
                            onN2={() => this.props.dispatch(jumpQuiz(1))}
                            onN3={() => this.props.dispatch(jumpQuiz(2))}
                            onN4={() => this.props.dispatch(jumpQuiz(3))}
                            onN5={() => this.props.dispatch(jumpQuiz(4))}
                            onN6={() => this.props.dispatch(jumpQuiz(5))}
                            onN7={() => this.props.dispatch(jumpQuiz(6))}
                            onN8={() => this.props.dispatch(jumpQuiz(7))}
                            onN9={() => this.props.dispatch(jumpQuiz(8))}
                            onN10={() => this.props.dispatch(jumpQuiz(9))}
                        />
                <Text>
                      Time left: {this.state.count} seconds  
                </Text>
                <Game style={styles.bar}
                    quiz={this.props.quizzes[this.props.currentQuiz]}
                    onQuestionAnswer={(answer) => {
                        this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
                    }}
                    currentQuiz={this.props.currentQuiz}
                    nQuestions={this.props.quizzes.length}
                    onPrevious={() => this.props.dispatch(changeQuiz(-1, this.props.quizzes.length))}
                    onNext={() => this.props.dispatch(changeQuiz(+1, this.props.quizzes.length))}
                    onSubmit={() => this.props.dispatch(submit(this.props.quizzes))}
                />

                <StorageBar style={styles.bar}
                    onSave={()=>this.save(this.props.quizzes)}
                    onLoad={()=> {
                        this.state.count =100;
                        this.load()}}
                    onRemove={()=>this.remove()}
                />

                <TouchableHighlight onPress={()=>this.props.navigation.goBack()}>
                    <Text style={styles.button}>Go Back</Text>
                </TouchableHighlight>
                  
              </View>
          );
      }
      return (
          <View>
              <Score
                  score={this.props.score}
                  onReset={() => {
                      this.state.count =100;
                      fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=e3d25c39f410b7b9ae95")
                          .then(res => res.json())
                          .then(quizzes => {
                              this.props.dispatch(initQuizzes(quizzes))
                          })
                  }}
              />
          </View>
      )
  }

  load = async () =>{
    let quizzes = await getData();
    if(quizzes!= null){
        this.props.dispatch(initQuizzes(quizzes));
        alert("Quizzes succesfully loaded");
    }
    else alert("No quizzes saved");
  }

  save = async (quizzes) =>{
      await storeData(quizzes);
      alert("Quizzes succesfully saved");
  }

  remove = async()=>{
      await removeData();
      alert("Quizzes succesfully removed");
  }

  download = async () => {
      let quizzes = await getAPI();
      this.props.dispatch(initQuizzes(quizzes));
  }

  async componentDidMount(){
      try {
          await this.download();
          setTimeout(()=>{
              this.setState({loading: false});
          },2000);

          this.myInterval = setInterval(()=>{
              this.setState({
                  count: this.state.count -1
              })
              if (this.state.count === 0){
                  this.props.dispatch(submit(this.props.quizzes));
              }
          }, 1000)


      } catch (e) {
          alert('ERROR');
      }
  }
  componentWillUnmount() {
      clearInterval(this.myInterval);
  }


}

function mapStateToProps(state) {
  return {
      ...state
  }
}

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
    bar:{
        alignContent:'center',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    screen:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightcyan'
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        fontSize: 15,
        textAlign: 'center',
        padding: 10
      }
});
