import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';
import { store } from './contexts';
import { Provider } from 'react-redux';
import { ThemeProvider } from './components';
import './helpers/customizedWindowObject';

// FONT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
);
