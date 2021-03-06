import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import BlogList from '../../components/social-media/BlogList';
import Title from '../../components/title/Title';

const SocialMediaScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <BlogList />
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
        resizeMode: 'cover'
    }
})

export default SocialMediaScreen;