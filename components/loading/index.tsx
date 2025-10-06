import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components';
import { Box, useTheme } from '@/theme';

import { InnerLoader } from './sections';

export const LoadingScreen = () => {
    const theme = useTheme();
    const {top} = useSafeAreaInsets();

    return (
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
                    <Box>
                        <InnerLoader />
                    </Box>
                </Box>
            </Box>
            <Box flex={1} />
        </Box>
    );
};
