import React from "react";
import { Image } from "react-native";

import { Box } from "@/theme";

export const RegularContent = () => {
    return (
        <Box flex={1}>
            <Image source={require('@/assets/images/cards/black_joker.png')} style={{width: '100%', height: '100%'}} />
        </Box>
    );
};