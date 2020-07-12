import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground, Dimensions, Image} from 'react-native';
import commonStyles from "../../../_helpers/commonStyles";
import colors from "../../../_helpers/colors";
import ExerciseList from "./components/exerciseList";

export default function SessionContainer() {

    const list = [{
        name: 'Pull-up',
        set: 5,
        reps: 10,
        rest: 60
    }, {
        name: 'Pull-up',
        set: 5,
        reps: 10,
        rest: 60
    }, {
        name: 'Pull-up',
        set: 5,
        reps: 10,
        rest: 60
    }, ]

    const exerciseList = () => {
        list.map(item => {
            return (
                <View style={styles.exerciseItemContainer}>
                    <View style={styles.leftPanel}>
                        <View>
                            <Text style={commonStyles.h1}>{item.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={commonStyles.h6}>{`Set ${item.set}`}</Text>
                            <Text style={commonStyles.h6}>{`Reps ${item.reps}`}</Text>
                            <Text style={commonStyles.h6}>{`Rest ${item.rest}Sec`}</Text>
                        </View>
                    </View>
                    <View style={styles.rightPanel}>
                        <Image style={styles.icon} source={require('../../assets/header/add.png')}/>
                    </View>
                </View>
            )
        })
    }


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/header/header.png')}>
                <Text style={commonStyles.h4}>
                    {'Catherine Williams'}
                </Text>
                <Text style={commonStyles.h1}>
                    {'Back and Abs'}
                </Text>
                <Text style={commonStyles.h4}>
                    {'Advanced'}
                </Text>
            </ImageBackground>
            <View style={styles.rowTimerContainer}>
                <View style={styles.rowTimer}>
                    <View>
                    <Text style={commonStyles.h3}>
                        {'4 Feb'}
                    </Text>
                        <Text style={commonStyles.h5}>
                            {'Date'}
                        </Text>
                    </View>
                    <View>
                    <Text style={commonStyles.h3}>
                        {'h 14:00'}
                    </Text>
                        <Text style={commonStyles.h5}>
                            {'Schedule'}
                        </Text>
                    </View>
                    <View>
                    <Text style={commonStyles.h3}>
                        {'1 hr'}
                    </Text>
                        <Text style={commonStyles.h5}>
                            {'Time'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.rowExerciseContainer}>
                <Text style={[commonStyles.h1, styles.footerTitle]}>
                    {'Exercises'}
                </Text>
              <ExerciseList/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: Dimensions.get('window').width,
        height: 240,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    rowTimerContainer: {
       marginTop: -20,
        width: Dimensions.get('window').width,
        padding: 10,
        height: 150,
        backgroundColor: colors.secondary,
        borderRadius: 31,
    },
    rowTimer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowExerciseContainer: {
        marginTop: -50,
        width: Dimensions.get('window').width,
        padding: 10,
        backgroundColor: colors.primary,
        borderRadius: 31,
    },
    footerTitle: {
        paddingVertical: 30,
        paddingHorizontal: 10
    }
});
