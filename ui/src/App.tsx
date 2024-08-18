import { Outlet } from 'react-router-dom';
import TestPlayground from './TestPlayground';

const App = () => {
    return (
        <div className='app'>
            <Outlet />
            <TestPlayground />
        </div>
    );
};

export default App;
