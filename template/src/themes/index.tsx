import React from 'react';
import createStore from '../utils/create-store';
import { ThemeProvider } from 'styled-components';

type ThemeState = {
    name: string
}

const themeList = [
    'red',
    'green'
]

const initThemeState = {
    name: 'red'
}

const reducer = (state: ThemeState, name: string): ThemeState => {
    return {
        name
    }
}

const [
    ThemeStoreProvider,
    useThemeDispach,
    useThemeState
] = createStore(reducer, initThemeState, 'theme');

const useThemeName = () => {
    const { name } = useThemeState();

    return name;
}

const getTheme = (name: string) => {
    switch (name) {
        case 'red':
            return {
                textColor: '#f00'
            }

        case 'green':
            return {
                textColor: '#0f0'
            }
    }
}

const InnerThemeProvider: React.FunctionComponent = ({ children }) => {
    const themeName = useThemeName();
    const theme = getTheme(themeName);

    console.log('Theme:', themeName, theme);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

const Theme: React.FunctionComponent = ({ children }) => {

    return (
        <ThemeStoreProvider>
            <InnerThemeProvider>
                {children}
            </InnerThemeProvider>
        </ThemeStoreProvider>
    )
}



const useThemeList = () => {
    return themeList
}

export {
    Theme,
    useThemeDispach,
    useThemeName,
    useThemeList
}
