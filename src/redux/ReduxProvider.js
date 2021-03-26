import {Provider} from 'react-redux';
import GlobalState from './reducers';
import {createStore} from 'redux';
import React from 'react';

import {quizzes} from '../assets/mock-data';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Quiz from '../components/Quiz';
import IndexScreen from '../components/IndexScreen';

const Stack = createStackNavigator();

export default class ReduxProvider extends React.Component{
    constructor(props){
        super(props);
        this.initialState={
            score:0,
            finished:false,
            currentQuiz:0,
            quizzes:[
                ...quizzes
            ]
        };
        this.store = this.configureStore();
    }

    render(){
        return (
            <Provider store={this.store}>
                <NavigationContainer>
                    <Stack.Navigator  initialRouteName="Home">
                        <Stack.Screen name="Home" component={IndexScreen}/>
                        <Stack.Screen name="Quiz" component={Quiz}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }

    configureStore(){
        return createStore(GlobalState, this.initialState);
    }
}