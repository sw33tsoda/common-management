import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './helpers/globalHelpers';
import './styles/main.scss';
import App from './App.tsx';

import { store } from './contexts';
import { ThemeProvider } from './components';
import { EntrancePage, LoginPage, RegisterPage } from './pages';

// FONT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/portal',
                element: <EntrancePage />,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>,
);
