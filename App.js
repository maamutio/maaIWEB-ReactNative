import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReduxProvider from './src/redux/ReduxProvider';

export default function App() {
  return (
    <ReduxProvider />
     
  );
}

