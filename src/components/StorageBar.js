import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class StorageBar extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <View style={styles.buttons}>
                    <Button title="Save" onPress={this.props.onSave}  />
                    <Button title="Load" onPress={this.props.onLoad}/>
                    <Button title="Remove" onPress={this.props.onRemove} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'space-around'
    },
});