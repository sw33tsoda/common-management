import { createTheme } from '@mui/material';
import { RootState } from '../../../contexts';
import { useSelector } from 'react-redux';
import { ThemeProvider as Provider } from '@mui/material';
import { ThemeProviderProps } from '@emotion/react';

const ThemeProvider = (props: Omit<ThemeProviderProps, 'theme'>) => {
    const themeState = useSelector((state: RootState) => state.themeSystem);

    const theme = createTheme({
        palette: {
            mode: themeState.mode,
        },
    });

    return <Provider {...props} theme={theme} />;
};

export { ThemeProvider };
