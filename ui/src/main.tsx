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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const providers: Array<any> = [
    { component: ThemeProvider, props: { theme } },
    { component: Provider, props: { store } },
];

const app = providers.reduce(
    (Base, Current) => <Current.component {...Current.props}>{Base}</Current.component>,
    <App />,
);

ReactDOM.createRoot(document.getElementById('root')!).render(app);
