import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AutoShopScreen from '../screens/auto-repair-shops/AutoShopScreen';
import BookScreen from '../screens/book-recommendations/BookScreen';
import ContactInfoScreen from '../screens/contact-info/ContactInfoScreen';
import GymTrackerScreen from '../screens/gym-tracker/GymTrackerScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MusicScreen from '../screens/music-recommendations/MusicScreen';
import RestaurantScreen from '../screens/restaurant-recommendations/RestaurantScreen';
import FinanceScreen from '../screens/finance/FinanceScreen';
import AutoFinanceScreen from '../screens/finance/auto-finances/AutoFinanceScreen';
import GeneralFinanceScreen from '../screens/finance/general-finances/GeneralFinanceScreen';
import MedicalFinanceScreen from '../screens/finance/medical-finances/MedicalFinanceScreen';
import MedicalOfficeScreen from '../screens/medical-offices/MedicalOfficeScreen';
import VehicleScreen from '../screens/vehicles/VehicleScreen';
import SocialMediaScreen from '../screens/social-media/SocialMediaScreen';
import UtilityScreen from '../screens/utility-info/UtilityScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import RecipeScreen from '../screens/recipes/RecipeScreen';
import AmericanRecipesScreen from '../screens/recipes/american-recipes/AmericanRecipesScreen';
import AsianRecipesScreen from '../screens/recipes/asian-recipes/AsianRecipeScreen';
import BarbequeRecipeScreen from '../screens/recipes/barbeque-recipes/BarbequeRecipeScreen';
import BreakfeastRecipeScreen from '../screens/recipes/breakfeast-recipes/BreakfeastRecipeScreen';
import ComfortRecipeScreen from '../screens/recipes/comfort-recipes/ComfortRecipeScreen';
import DesertRecipeScreen from '../screens/recipes/desert-recipes/DesertRecipeScreen';
import FilipinoRecipeScreen from '../screens/recipes/filipino-recipes/FilipinoRecipeScreen';
import HispanicRecipeScreen from '../screens/recipes/hispanic-recipes/HispanicRecipeScreen';
import ItalianRecipeScreen from '../screens/recipes/italian-recipes/ItalianRecipeScreen';
import SeafoodRecipeScreen from '../screens/recipes/seafood-recipes/SeafoodRecipeScreen';
import SlowCookerRecipeScreen from '../screens/recipes/slow-cooker-recipes/SlowCookerRecipeScreen';
import RunTrackerScreen from '../screens/run-tracker/RunTrackerScreen';
import BookListScreen from '../screens/book-recommendations/BookListScreen';
import AllMusicScreen from '../screens/music-recommendations/AllMusicScreen';
import AllContactsScreen from '../screens/contact-info/AllContactsScreen';
import AllAutoShopsScreen from '../screens/auto-repair-shops/AllAutoShops';
import AllRestaurantsScreen from '../screens/restaurant-recommendations/AllRestaurantsScreen';
import AllRunsScreen from '../screens/run-tracker/AllRunsScreen';
import AllGymEntriesScreen from '../screens/gym-tracker/AllGymEntriesScreen';
import AllVehiclesScreen from '../screens/vehicles/AllVehiclesScreen';
import AllGeneralTrxScreen from '../screens/finance/general-finances/AllGeneralTrxScreen';
import AllMedicalOfficesScreen from '../screens/medical-offices/AllMedicalOfficesScreen';
import AllAutoTrxScreen from '../screens/finance/auto-finances/AllAutoTrxScreen';
import AllMedicalTrxScreen from '../screens/finance/medical-finances/AllMedicalTrxScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {    
    return (
        <NavigationContainer>
            <Stack.Navigator intialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details' }} />

                <Stack.Screen name="Books" component={BookScreen} options={{ title: 'Book'}} />
                <Stack.Screen name="All Books" component={BookListScreen} options={{ title: 'All Books'}} />

                <Stack.Screen name="Contact Info" component={ContactInfoScreen} options={{ title: 'Contact Info' }} />
                <Stack.Screen name="All Contacts" component={AllContactsScreen} options={{ title: 'All Contacts' }} />

                <Stack.Screen name="Gym Tracker" component={GymTrackerScreen} options={{ title: 'Gym Tracker'}} />
                <Stack.Screen name="All Gym Entries" component={AllGymEntriesScreen} options={{ title: 'All Gym Entries '}} />

                <Stack.Screen name="Run Tracker" component={RunTrackerScreen} option={{ title: 'Run Tracker' }} />
                <Stack.Screen name="All Runs" component={AllRunsScreen} options={{ title: 'All Runs'}} />

                <Stack.Screen name="Finances" component={FinanceScreen} options={{ title: 'Finance' }} />

                <Stack.Screen name="Auto-Finances" component={AutoFinanceScreen} options={{ title: 'Auto Finances' }} />
                <Stack.Screen name="All Auto Transactions" component={AllAutoTrxScreen} options={{ title: 'All Auto Transactions'}} />

                <Stack.Screen name="Auto-Shops" component={AutoShopScreen} options={{ title: 'Auto Shops' }} />
                <Stack.Screen name="All Auto Shops" component={AllAutoShopsScreen} options={{ title: 'Auto Shops'}} />

                <Stack.Screen name="Vehicles" component={VehicleScreen} options={{ title: 'Vehicles' }} />
                <Stack.Screen name="All Vehicles" component={AllVehiclesScreen} options={{ title: 'All Vehicles' }} />

                <Stack.Screen name="General-Finances" component={GeneralFinanceScreen} options={{ title: 'General-Finances'}} />
                <Stack.Screen name="All General Transactions" component={AllGeneralTrxScreen} options={{ title: 'All General Transactions'}} />

                <Stack.Screen name="Medical Finances" component={MedicalFinanceScreen} options={{ title: 'Medical Finances' }} />
                <Stack.Screen name="All Medical Transactions" component={AllMedicalTrxScreen} options={{ title: 'All Medical Transactions'}} />

                <Stack.Screen name="Medical-Offices" component={MedicalOfficeScreen} options={{ title: 'Medical Offices' }} />
                <Stack.Screen name="All Medical Offices" component={AllMedicalOfficesScreen} options={{ title: 'All Medical Offices'}} />

                <Stack.Screen name="Music" component={MusicScreen} options={{ title: 'Music' }} />
                <Stack.Screen name="All Music" component={AllMusicScreen} options={{ title: 'All Music'}} />

                <Stack.Screen name="Restaurants" component={RestaurantScreen} options={{ title: 'Restaurants' }} />
                <Stack.Screen name="All Restaurants" component={AllRestaurantsScreen} options={{ title: 'All Restaurants' }} />

                <Stack.Screen name="Social Media" component={SocialMediaScreen} options={{ title: 'Social Media' }} />
                <Stack.Screen name="Utility Info" component={UtilityScreen} options={{title: 'Utility Info' }} />

                <Stack.Screen name="Recipes" component={RecipeScreen} options={{ title: 'Family Recipes '}} />
                <Stack.Screen name="Asian Recipes" component={AsianRecipesScreen} options={{ title: 'Asian Recipes' }} />
                <Stack.Screen name="American" component={AmericanRecipesScreen} option={{ title: 'American Recipes' }} />
                <Stack.Screen name="Barbeque Recipes" component={BarbequeRecipeScreen} option={{ title: 'Barbeque Recipes'}} />
                <Stack.Screen name="Breakfeast Recipes" component={BreakfeastRecipeScreen} option={{ title: 'Breakfeast Recipes' }} />
                <Stack.Screen name="Comfort Recipes" component={ComfortRecipeScreen} option={{ title: 'Comfort Recipes' }} />
                <Stack.Screen name="Desert Recipes" component={DesertRecipeScreen} option={{ title: 'Desert Recipes' }} />
                <Stack.Screen name="Filipino Recipes" component={FilipinoRecipeScreen} option={{title: 'Filipino Recipes'}} />
                <Stack.Screen name="Hispanic Recipes" component={HispanicRecipeScreen} option={{ title: 'Hispanic Recipes' }} />
                <Stack.Screen name="Italian Recipes" component={ItalianRecipeScreen} option={{ title: 'Italian Recipes' }} />
                <Stack.Screen name="Seafood Recipes" component={SeafoodRecipeScreen} option={{ title: 'Seafood Recipes' }} />
                <Stack.Screen name="Slow Cooker Recipes" component={SlowCookerRecipeScreen} option={{ title: 'Slow Cooker Recipes' }} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;