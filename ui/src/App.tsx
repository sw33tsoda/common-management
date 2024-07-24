import { Loading } from './components/Loading';
import { userAuthenticationService } from './services';

const App = () => {
    const callApi = async () => {
        $$.loadingAnimation(true);
        const data = await userAuthenticationService.login({
            email: 'sw33tsoda@gmail.com',
            password: 'K9n6sgmv',
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
