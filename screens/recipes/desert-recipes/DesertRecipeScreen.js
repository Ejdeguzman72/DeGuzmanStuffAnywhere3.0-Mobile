import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CarrotCakeRecipeModal from '../../../components/recipes/modals/desert-recipes/CarrotCakeRecipeModal';
import PecanPieRecipeModal from '../../../components/recipes/modals/desert-recipes/PecanPieRecipeModal';
import PineappleUpsideDownCakeRecipeModal from '../../../components/recipes/modals/desert-recipes/PineappleUpsideDownCakeRecipeModal';
import RedVelvetCakeRecipeModal from '../../../components/recipes/modals/desert-recipes/RedVelvetCakeRecipeModal';
import Title from '../../../components/title/Title';

const DesertRecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <PineappleUpsideDownCakeRecipeModal />
                <CarrotCakeRecipeModal />
                <RedVelvetCakeRecipeModal />
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

export default DesertRecipeScreen;