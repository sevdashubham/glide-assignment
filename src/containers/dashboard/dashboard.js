import * as React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import colors from '../../../_helpers/colors'
import GymContainer from "../gymContainer/gymContainer";
import SessionContainer from "../sessionContainer/sessionContainer";

const gymActive = require('../../assets/gym/gym.png');
const gym = require('../../assets/gym/gymInactive.png');
const clients = require('../../assets/people/people-24px.png');
const sessions = require('../../assets/Sessions/session.png');
const sessionsActive = require('../../assets/Sessions/sessionActive.png');
const schedule = require('../../assets/calendar-today/calendar-today.png');

const initialLayout = {width: Dimensions.get('window').width};

export default function Dashboard() {
    const [index, setIndex] = React.useState(3);
    const [routes] = React.useState([
        {
            key: 'gym',
            icon: gym,
            active: gymActive,
        },
        {
            key: 'clients',
            icon: clients,
            active: gymActive,
        },
        {
            key: 'sessions',
            icon: sessions,
            active: sessionsActive,
        }, {
            key: 'schedule',
            icon: schedule,
            active: sessionsActive,
        },
    ]);

    const renderScene = ({route}) => {
        if (Math.abs(index - routes.indexOf(route)) > 1) {
            return <View/>;
        }
        switch (route.key) {
            case 'gym':
                return <View style={{flex: 1}}><GymContainer/></View>;
            case 'clients':
                return <View style={{flex: 1}}><GymContainer/></View>;
            case 'sessions':
                return <View style={{flex: 1}}><SessionContainer/></View>;
            case 'schedule':
                return <View style={{flex: 1}}><SessionContainer/></View>;
            default:
                return null;
        }
    };

    const renderIcon = ({route, focused}) => {
        return (
            <View style={styles.tab}>
                <Image source={focused? route.active : route.icon} size={24} style={styles.icon}/>
                <Text style={styles.tabTitle}>{route.key}</Text>
            </View>
        )
    };

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor: colors.tabColor}}
            renderIcon={renderIcon}
            style={styles.tabBar}
        />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            tabBarPosition="bottom"
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabTitle: {
        paddingTop: 5,
        color: colors.whiteDark,
        textTransform: 'capitalize'
    },
    icon: {
        height: 32,
        width: 32
    },
    tabBar: {
        backgroundColor: colors.tabColor,
        height: 70
    }
});
