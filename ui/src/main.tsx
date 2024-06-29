import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { theme, store } from './contexts';
import { Provider } from 'react-redux';

// FONT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
);
