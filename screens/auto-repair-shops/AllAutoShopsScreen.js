import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import AutoShopList from '../../components/auto-repair-shops/list/AutoShopList';
import Title from '../../components/title/Title';

const AllAutoShopsScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <AutoShopList />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default AllAutoShopsScreen;