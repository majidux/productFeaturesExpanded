import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <View style={styles.sideBar}>
                <View style={styles.noficationPanel}>
                    <View style={styles.noficationPanelWrapper}>
                        <View style={styles.noficationPanelHeader}>
                            <Text
                                style={{fontSize: 20, color: "#000", fontWeight: "600"}}
                            >
                                لورم ایپسوم متن ساختگی با
                            </Text>
                        </View>
                        <View style={styles.noficationPanelDetails}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontSize: 16,
                                    fontWeight: "300",
                                    lineHeight: 30
                                }}
                            >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است.
                            </Text>
                        </View>
                        <View style={styles.noficationPanelButton}>
                            <View style={styles.buttonWrapper}>
                                <Text style={{color: "#eee"}}>برو</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={styles.noficationList}>
                    <View style={styles.eventText}>
                        <Text
                            style={{
                                color: "#2d3f4f",
                                fontFamily: "IRAN Sans Web Medium",
                                fontSize: 18,
                                fontWeight: "500"
                            }}
                        >
                            رویداد ها
                        </Text>
                    </View>
                    <View style={styles.listMonth}>
                        <View style={styles.listHeader}>
                            <View style={styles.buttonUpImageWrapper}>
                                <Image source={require("../image/buttonUp.png")}/>
                            </View>
                            <View style={styles.monthTextWrapper}>
                                <Text>مهر</Text>
                            </View>
                        </View>
                        <View style={styles.listDetails}>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}>رویداد رونمایی از نسخه ی
                                جدید پیام گستر</Text>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}>جلسات آموزشی نسخه ی
                                جدید</Text>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}>کارگاه دو روزه</Text>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}> همایش بررسی نقش سی آر ام
                                روی بهروری</Text>
                        </View>
                    </View>
                    
                    <View style={styles.listMonth}>
                        <View style={styles.listHeader}>
                            <View style={styles.buttonUpImageWrapper}>
                                <Image source={require("../image/buttonUp.png")}/>
                            </View>
                            <View style={styles.monthTextWrapper}>
                                <Text>شهریور</Text>
                            </View>
                        </View>
                        <View style={styles.listDetails}>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}>رویداد رونمایی از نسخه ی
                                جدید پیام گستر</Text>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}>جلسات آموزشی نسخه ی
                                جدید</Text>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}>کارگاه دو روزه</Text>
                            <Text style={{fontSize: 14, color: '#6a7782', fontWeight: '600'}}> همایش بررسی نقش سی آر ام
                                روی بهروری</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    
    sideBar: {
        flex: 0.23,
        borderColor: "steelblue",
        backgroundColor:'white',
        padding: 25,
        paddingTop: 40,
        // paddingLeft:100
    },
    noficationPanel: {
        flex: 0.3,
        borderColor: "red",
        paddingVertical: 12,
        paddingHorizontal: 2
    },
    noficationPanelWrapper: {
        flex: 1,
        backgroundColor: "#eeeeee",
        paddingHorizontal: 10,
    },
    noficationPanelHeader: {
        flex: 0.25,
        borderColor: "teal",
        justifyContent: "center"
    },
    noficationPanelDetails: {
        flex: 0.5,
        borderColor: "gold",
    },
    noficationPanelButton: {
        flex: 0.25,
        borderColor: "red",
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    buttonWrapper: {
        height: 36,
        width: 76,
        backgroundColor: "#00afb2",
        justifyContent: "center",
        alignItems: "center"
    },
    
    eventText: {
        flex: 0.1,
        flexDirection: "row",
        borderColor: "red",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    noficationList: {
        flex: 0.7,
        borderColor: "gold",
    },
    listMonth: {
        flex: 0.35,
        borderColor: "#444",
        paddingHorizontal: 10
    },
    listHeader: {
        flex: 0.15,
        backgroundColor: '#f3f6fa',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 5
    },
    
    listDetails: {
        flex: 0.85,
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        paddingRight: 20,
    }
    
    
})