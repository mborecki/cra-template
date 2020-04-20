import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import { Menu, Container } from 'semantic-ui-react';
import HomePage from './routes/Home';
import DemoPage from './routes/Demo';

import ThemeSelect from './components/theme-select';

export default function App() {
    return (
        <BrowserRouter>
            <Menu as="nav">
                <Menu.Item as={NavLink} exact to='/' >Home</Menu.Item>
                <Menu.Item as={NavLink} exact to='/demo' >Demo Page</Menu.Item>

                <Menu.Item as={'div'}>
                    <ThemeSelect />
                </Menu.Item>
            </Menu>
            <Container text>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/demo">
                    <DemoPage />
                </Route>
            </Container>
        </BrowserRouter>
    )
}
