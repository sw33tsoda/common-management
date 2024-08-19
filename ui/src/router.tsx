import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { EntrancePage, LoginPage, RegisterPage } from './pages';

export const router = createBrowserRouter([
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
