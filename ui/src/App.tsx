import { useEffect } from 'react';
import { Loading } from './components/Loading';
import { api } from './helpers';

const App = () => {
    const callApi = async () => {
        $$.loadingAnimation(true);
        api.post('http://localhost:5053/api/auth/login', {
            createdAt: '2024-07-19T11:34:00.579Z',
            createdBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            modifiedAt: '2024-07-19T11:34:00.579Z',
            modifiedBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            id: '14c50ee8-7035-4b39-ae8a-7cf46ce62af7',
            email: 'user@example.com',
            password: '',
            userRole: 0,
            userProfileId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }).then((value) => {
            console.log({ value });
        });

        $$.loadingAnimation(false);
    };

    return (
        <div className='app'>
            <button onClick={callApi}>call api</button>
            <Loading />
        </div>
    );
};

export default App;
