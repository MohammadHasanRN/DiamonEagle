import { Stack } from "expo-router";

import { ScreenHeight, ScreenWidth } from "@/core";
import { Box, ThemeProvider } from "@/theme";


export default function RootLayout() {
  return (
      <Box height={ScreenHeight} width={ScreenWidth}>
        <ThemeProvider dark={false}>
          <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="game" options={{headerShown: false}} />
          </Stack>
        </ThemeProvider>
      </Box>
    )
}
