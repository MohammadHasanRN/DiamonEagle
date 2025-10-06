import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, Text } from '@/components';
import { ScreenWidth } from '@/core';
import { Box, useTheme } from '@/theme';

export default function MenuScreen() {
  const theme = useTheme();
  const {top} = useSafeAreaInsets();

  // Loading
  const [launching, setLaunching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, 3500);
  }, []);

  return launching ? <LoadingScreen /> : (
    <Box zIndex={10} backgroundColor="Light" flex={1}>
        <Box flex={1} />
        <Box flex={5} justifyContent="space-between">
            <Box alignItems="center" style={{paddingTop: top || theme.spacing.m}}>
                <Text variant="H4" color="Success">CARDS</Text>
                <Box style={{marginTop: -theme.spacing.s}}>
                    <Text variant="H2" color="Primary">MEMORY</Text>
                </Box>
            </Box>
            <Box flex={1} alignItems="center" justifyContent="center">
                <TouchableOpacity onPress={() => router.navigate('/game?type=new')}>
                  <Box width={ScreenWidth * 0.85} borderWidth={1} borderColor="DarkGray" borderRadius="s" paddingVertical="sm" alignItems="center" justifyContent="center">
                    <Text variant="H6Semi" color="Dark">New Game</Text>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.navigate('/game')}>
                  <Box marginTop="sm" width={ScreenWidth * 0.85} borderWidth={1} borderColor="DarkGray" borderRadius="s" paddingVertical="sm" alignItems="center" justifyContent="center">
                    <Text variant="H6Semi" color="Dark">Load Game</Text>
                  </Box>
                </TouchableOpacity>
            </Box>
        </Box>
        <Box flex={1} />
    </Box>
  );
}
