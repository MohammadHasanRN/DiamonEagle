import { Dimensions, Image, Platform, View } from 'react-native';
import Animated from 'react-native-reanimated';

// Dimentions
export const ScreenWidth = Platform.OS === 'web' ? Dimensions.get('window').height * 0.461 : Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

// Platform
export const IsIos = Platform.OS === 'ios';
export const IsWeb = Platform.OS === 'web';

// Dev Auth 
export const TestingToken = '';
export const TestingUrl = '';

// Animated Wrapper
export const AnimatedBox = Animated.createAnimatedComponent(View);
export const AnimatedImage = Animated.createAnimatedComponent(Image);

export const Cards = [
    require('@/assets/images/cards/2_of_clubs.png'),
    require('@/assets/images/cards/3_of_clubs.png'),
    require('@/assets/images/cards/4_of_clubs.png'),
    require('@/assets/images/cards/5_of_clubs.png'),
    require('@/assets/images/cards/6_of_clubs.png'),
    require('@/assets/images/cards/7_of_clubs.png'),
    require('@/assets/images/cards/8_of_clubs.png'),
    require('@/assets/images/cards/9_of_clubs.png'),
    require('@/assets/images/cards/10_of_clubs.png'),
    require('@/assets/images/cards/ace_of_clubs.png'),
    require('@/assets/images/cards/jack_of_clubs.png'),
    require('@/assets/images/cards/king_of_clubs.png'),
    require('@/assets/images/cards/queen_of_clubs.png'),
    require('@/assets/images/cards/2_of_hearts.png'),
    require('@/assets/images/cards/3_of_hearts.png'),
    require('@/assets/images/cards/4_of_hearts.png'),
    require('@/assets/images/cards/5_of_hearts.png'),
    require('@/assets/images/cards/6_of_hearts.png'),
    require('@/assets/images/cards/7_of_hearts.png'),
    require('@/assets/images/cards/8_of_hearts.png'),
    require('@/assets/images/cards/9_of_hearts.png'),
    require('@/assets/images/cards/10_of_hearts.png'),
    require('@/assets/images/cards/ace_of_hearts.png'),
    require('@/assets/images/cards/jack_of_hearts.png'),
    require('@/assets/images/cards/king_of_hearts.png'),
    require('@/assets/images/cards/queen_of_hearts.png'),
    require('@/assets/images/cards/2_of_diamonds.png'),
    require('@/assets/images/cards/3_of_diamonds.png'),
    require('@/assets/images/cards/4_of_diamonds.png'),
    require('@/assets/images/cards/5_of_diamonds.png'),
    require('@/assets/images/cards/6_of_diamonds.png'),
    require('@/assets/images/cards/7_of_diamonds.png'),
    require('@/assets/images/cards/8_of_diamonds.png'),
    require('@/assets/images/cards/9_of_diamonds.png'),
    require('@/assets/images/cards/10_of_diamonds.png'),
    require('@/assets/images/cards/ace_of_diamonds.png'),
    require('@/assets/images/cards/jack_of_diamonds.png'),
    require('@/assets/images/cards/king_of_diamonds.png'),
    require('@/assets/images/cards/queen_of_diamonds.png'),
    require('@/assets/images/cards/2_of_spades.png'),
    require('@/assets/images/cards/3_of_spades.png'),
    require('@/assets/images/cards/4_of_spades.png'),
    require('@/assets/images/cards/5_of_spades.png'),
    require('@/assets/images/cards/6_of_spades.png'),
    require('@/assets/images/cards/7_of_spades.png'),
    require('@/assets/images/cards/8_of_spades.png'),
    require('@/assets/images/cards/9_of_spades.png'),
    require('@/assets/images/cards/10_of_spades.png'),
    require('@/assets/images/cards/ace_of_spades.png'),
    require('@/assets/images/cards/jack_of_spades.png'),
    require('@/assets/images/cards/king_of_spades.png'),
    require('@/assets/images/cards/queen_of_spades.png'),
]