import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getHomeRoute, getSubPageRoute } from './routes/routes';
import React, { Suspense } from 'react';
import Loader from './components/loader';

const HomePage = React.lazy(() => import('./routes/home'));
const SubPage = React.lazy(() => import('./routes/sub-page'));

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={getHomeRoute()} element={<HomePage />} />
                <Route path={getSubPageRoute()} element={<SubPage />} />
                <Route element={<HomePage />} />
            </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
