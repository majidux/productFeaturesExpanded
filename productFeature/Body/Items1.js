import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Headitem extends Component {
    render() {
        return (
            <View style={styles.listItems}>
                <View style={styles.leftStyle}>
                    <TouchableOpacity style={styles.declineButton}>
                        <View>
                            <Text style={styles.leftFonts}>رزرو</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightStyle}>
                    <Text style={styles.rightFonts}>استقرار</Text>
                    
                    <Text style={styles.rightFonts}>جلسه دوم</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftFonts: {
        color: 'white',
        fontSize: 15
    },
    rightFonts: {
        color: 'black',
        fontSize: 17
    },
    listItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f3f6fa',
        paddingVertical: 10,
        alignItems:'center'
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: .29,
    },
    leftStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: .175
    },
    declineButton: {
        backgroundColor: '#ff795f',
        width: 75,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
});