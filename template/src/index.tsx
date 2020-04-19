import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ModulesProviders from './modules/providers';

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <React.StrictMode>
        <ModulesProviders>
            <App />
        </ModulesProviders>
    </React.StrictMode>,
    document.getElementById('root')
);
