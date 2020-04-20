import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ModulesProviders from './modules/providers';

import 'semantic-ui-css/semantic.min.css';
import { Theme } from './themes';

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <ModulesProviders>
                <App />
            </ModulesProviders>
        </Theme>
    </React.StrictMode>,
    document.getElementById('root')
);
