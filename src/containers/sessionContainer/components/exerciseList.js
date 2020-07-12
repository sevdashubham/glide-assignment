import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Image, ImageBackground} from 'react-native';
import colors from "../../../../_helpers/colors";
import commonStyles from "../../../../_helpers/commonStyles";

export default function ExerciseList() {

    const DATA = [{
        id: '12',
        name: 'Pull-up',
        set: 5,
        reps: 10,
        rest: 60
    }, {
        id: '13',
        name: 'Push-up',
        set: 5,
        reps: 10,
        rest: 60
    }, {
        id: '144',
        name: 'Plank',
        set: 5,
        reps: 10,
        rest: 60
    },{
        id: '15',
        name: 'Sit-up',
        set: 5,
        reps: 10,
        rest: 60
    }]

    const renderItem = ({ item }) => (
        <View style={styles.exerciseItemContainer}>
            <View style={styles.leftPanel}>
                <View>
                    <Text style={commonStyles.h1}>{item.name}</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <Text style={commonStyles.h6}>{`Set ${item.set}`}</Text>
                    <Text style={commonStyles.h6}>{`Reps ${item.reps}`}</Text>
                    <Text style={commonStyles.h6}>{`Rest ${item.rest}Sec`}</Text>
                </View>
            </View>
            <View style={styles.rightPanel}>
                <Image style={styles.icon} source={require('../../../assets/header/tick.png')}/>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    exerciseItemContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary
    }, icon: {
        height: 45,
        width: 45
    },
    leftPanel: {
        flex: 3,
        flexDirection: 'column'
    }, rightPanel: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});
