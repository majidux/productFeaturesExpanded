import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Headitem extends Component {
    render() {
        return (
            <View style={styles.listItems}>
                <View style={styles.leftStyle}>
                    <View style={styles.declineButton}>
                        <Text style={styles.leftFonts}>رزرو</Text>
                    </View>
                </View>
                <View style={styles.rightStyle}>
                    <Text style={styles.rightFonts}>جلسه اول</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftFonts:{
        color:'white',
        fontSize:15
    },
    rightFonts:{
        color: 'black',
        paddingHorizontal: 30,
        fontSize: 17
    },
    listItems:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#f3f6fa',
        paddingHorizontal: 15,
        paddingVertical: 10
    
    },
    rightStyle:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center',
        flex:.725
    },
    leftStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        flex: .175
    },
    declineButton:{
        backgroundColor:'#ff795f',
        width: 75,
        height: 28,
        justifyContent:'center',
        alignItems: 'center'
    },
});