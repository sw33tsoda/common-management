import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './helpers/globalHelpers';
import './styles/main.scss';

import { store } from './contexts';
import { ThemeProvider } from './components';

import { router } from './router';

// FONT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>,
);
