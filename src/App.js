import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common'
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCf5OoWq4g2noIp2Zv_HZvjWB9iWhs4rqw',
            authDomain: 'authentication-212da.firebaseapp.com',
            databaseURL: 'https://authentication-212da.firebaseio.com',
            projectId: 'authentication-212da',
            storageBucket: '',
            messagingSenderId: '39888032208'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;