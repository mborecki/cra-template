import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import { Menu, Container } from 'semantic-ui-react';
import HomePage from './routes/home';
import DemoPage from './routes/demo';

import ThemeSelect from './components/template-demos/theme-select';

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
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/demo" component={DemoPage} />
                    <Route component={HomePage} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
