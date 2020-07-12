import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import commonStyles from "../../../_helpers/commonStyles";
import SessionSlider from "./components/sessionSlider";
import ClientSlider from "./components/clientSlider";
import Calendar from "./components/calendar";
import Header from "./components/header";

export default function GymContainer() {
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Text style={[commonStyles.h2, styles.welcomeText]}>
                Welcome back, Alberto!
            </Text>
            <Calendar/>
            <Text style={[commonStyles.h1, styles.welcomeText]}>
                Your training sessions
            </Text>
            <SessionSlider/>
            <Text style={[commonStyles.h3, styles.welcomeText]}>
                Latest clients
            </Text>
            <ClientSlider/>
            <View style={styles.extraSpace}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    welcomeText: {
       paddingTop: 40
    },
    logo: {
        height: 128,
        width: 128,
    },
    extraSpace: {
        paddingBottom: 50
    }
});
