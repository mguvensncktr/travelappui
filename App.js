import React from 'react';
import { useFonts } from 'expo-font';
import Router from './navigation/router';

export default function App() {

  const [loaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
  })
  if (!loaded) {
    return null;
  }

  return (
    <Router />
  );
}


