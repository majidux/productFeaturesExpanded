import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Headitem extends Component {
    render() {
        return (
            <View style={styles.listItems}>
                <View style={styles.leftStyle}>
                    <TouchableOpacity>
                        <View style={styles.declineButton}>
                            <Text style={styles.leftFonts}>لغو</Text>
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.editButton}>
                        <Text style={styles.leftFonts}>ویرایش</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={styles.rightStyle}>
                    <Text style={styles.rightFonts}>۹ الی ۱۲:۳۰</Text>
                    <Text style={styles.rightFonts}>چهارشنبه ۹۷/۸/۲۲</Text>
                    <Text style={styles.rightFonts}>استقرار</Text>
                    <Text style={styles.rightFonts}>جلسه اول</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftFonts: {
        color: 'white',
        fontSize: 15,
    },
    rightFonts: {
        color: 'black',
        fontSize: 17
    },
    listItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical: 10
    },
    rightStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: .6,
    },
    leftStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: .175
    },
    declineButton: {
        backgroundColor: '#2e3f50',
        width: 75,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editButton: {
        backgroundColor: '#00afb2',
        width: 75,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    }
});