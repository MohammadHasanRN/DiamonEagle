import React from 'react';
import { ImageSourcePropType, TouchableWithoutFeedback } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBox, ScreenWidth } from '@/core';
import { Box, useTheme } from '@/theme';

import { FlippedContent } from './back-face';
import { RegularContent } from './front-face';


interface Props {
    cardId: number;
    isFlipped: boolean;
    isMatched: boolean;
    onPress: (cardId: number) => void;
    direction?: 'x' | 'y';
    duration?: number;
    card: ImageSourcePropType;
}
  
export const FlipCard = ({
    cardId,
    isFlipped: isFlippedProp,
    isMatched,
    onPress,
    direction = 'y',
    duration = 300,
    card,
}: Props) => {
    const theme = useTheme();
  
    const isDirectionX = direction === 'x';
  
    const isFlipped = useSharedValue(isFlippedProp);
  
    React.useEffect(() => {
      isFlipped.value = isFlippedProp;
    }, [isFlippedProp]);
  
    const handlePress = () => {
      if (!isMatched) {
        onPress(cardId);
      }
    };
  
    const regularCardAnimatedStyle = useAnimatedStyle(() => {
      const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
      const rotateValue = withTiming(`${spinValue}deg`, { duration });
  
      return {
        transform: [
          isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
        ],
      };
    });
  
    const flippedCardAnimatedStyle = useAnimatedStyle(() => {
      const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
      const rotateValue = withTiming(`${spinValue}deg`, { duration });
  
      return {
        transform: [
          isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
        ],
      };
    });
  
    return (
      <TouchableWithoutFeedback onPress={handlePress} disabled={isMatched}>
          <Box width={ScreenWidth / 6} height={(ScreenWidth / 6) * 1.452} opacity={isMatched ? 0.25 : 1}>
            <AnimatedBox
                style={[
                    {backfaceVisibility: 'hidden', position: 'absolute', zIndex: 1, bottom: 0, left: 0, right: 0, top: 0},
                    regularCardAnimatedStyle,
                ]}>
                <RegularContent />
            </AnimatedBox>
            <AnimatedBox
                style={[
                    {backfaceVisibility: 'hidden', zIndex: 2, flex: 1},
                    flippedCardAnimatedStyle,
                ]}>
                <FlippedContent card={card} />
            </AnimatedBox>
          </Box>
      </TouchableWithoutFeedback>
    );
};
  