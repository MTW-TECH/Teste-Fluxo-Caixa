import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A646DC',
      100: '#382059',
      200: '#923EC5',
      80: '#683CA6',
      60: '#9857F2',
      logo: '#9340C5'
    },
    secondary: {
      main: '#F27405',
      100: '#037F8C',
      80: '#04ADBF',
      60: '#85C3CA'
    },
    accentPurple: {
      main: '#551778',
      100: '#D2A3ED',
      500: '#F8F0FC',
      text: '#A646DC'
    },
    optional: {
      100: '#BF5B04',
      80: '#F27405',
      60: '#F4C9A1',
      40: '#31193D',
      20: '#988d9e',
      10: '#f2b305'
    },
    action: {
      grey: '#EDEDED',
      middleGrey: '#B0B0B0',
      greytext: '#878787',
      deepGrey: '#7B7B7B'
    },
    divisory: {
      colorBorder: '#DED8E3',
      mediumBorder: '#d8d8d8',
      contrastBorder: '#C7C7C7',
      harshBorder: '#AAAAAA'
    },
    background: {
      main: '#F6F7FB',
      standard: '#FFFFFF',
      outmost: '#F5F3F7',
      table: 'rgba(243, 244, 246, 0.87)',
      100: '#FCFCFC'
    },
    text: {
      primary: '#000',
      secondary: '#A9A9A9',
      voidTitle: '#5D5E66',
      voidText: '#B9B9B9',
      boxedTitle: '#423F46',
      floatingTitle: '#000'
    },
    textlight: {
      main: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      'Figtree',
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
