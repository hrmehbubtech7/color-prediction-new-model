import { extendTheme } from "@chakra-ui/react";

 
 export const stationScreensTheme = extendTheme({
    fonts: {
        body: 'Inter, system-ui, sans-serif',
        heading: 'Inter, system-ui, sans-serif',
    },
    components: {
        Heading: {
          sizes: {
            h1: { fontSize: '62px', fontWeight: 'semibold' },
            h2: { fontSize: '42px', fontWeight: 'semibold' },
            h3: { fontSize: '32px', fontWeight: 'semibold' },
            h5: { fontSize: '20px', fontWeight: 'normal' },
            h6: {
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '36px',
              lineHeight: '50px',
            },
          },
        },
      },
 })