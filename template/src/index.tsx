import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ModulesProviders from './modules/providers';

import './style.scss';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/array/fill';
import 'core-js/features/object/values'
import 'core-js/features/number/is-nan';
import 'core-js/features/string/starts-with';

ReactDOM.render(
    <React.StrictMode>
        <ModulesProviders>
            <App />
        </ModulesProviders>
    </React.StrictMode>,
    document.getElementById('root')
);
