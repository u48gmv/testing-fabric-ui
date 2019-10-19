import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadTheme } from 'office-ui-fabric-react';
import './index.css';

loadTheme({
  palette: {
    themePrimary: '#09b309',
    themeLighterAlt: '#f2fcf2',
    themeLighter: '#cef3ce',
    themeLight: '#a6e8a6',
    themeTertiary: '#5ad15a',
    themeSecondary: '#1fbc1f',
    themeDarkAlt: '#08a108',
    themeDark: '#078807',
    themeDarker: '#056405',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

