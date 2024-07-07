import { Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { GLOBAL_THEME_SYSTEM_TOGGLE } from './contexts/redux/reducers/themeSystem';
import { LoginPage } from './pages';

const App = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Switch
                onChange={() => {
                    dispatch(GLOBAL_THEME_SYSTEM_TOGGLE());
                }}
            />
            <LoginPage />
        </>
    );
};

export default App;
