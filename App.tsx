// App.tsx

import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { enableScreens } from 'react-native-screens';

// Enable screens for better performance
enableScreens();

const App = () => {
  return <MainNavigator />;
};

export default App;
