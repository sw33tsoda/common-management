import { RootState } from '../../../contexts';
import { useSelector } from 'react-redux';

const ThemeProvider = (props) => {
    const themeState = useSelector((state: RootState) => state.themeSystem);

    return props.children;
};

export { ThemeProvider };
