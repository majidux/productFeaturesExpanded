import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Headitem from "./Headitem";
import Items1 from "./Items1";
import Items2 from "./Items2";
import Items3 from "./Items3";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.bodyStyles}>
                <View style={styles.headTitle}>
                    <Text style={{fontSize: 30, color: 'black'}}>درخواست جلسه</Text>
                </View>
                <View>
                    <Headitem/>
                    <Items1/>
                    <Items2/>
                    <Items3/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyStyles: {
        flex: .77,
        padding: 25,
        paddingBottom: 0
    },
    headTitle: {
        marginVertical: 40
    },
    
    
});