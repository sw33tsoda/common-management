import { Loading } from './components/Loading';
import { userAuthenticationService } from './services';
import { ILoginParamsDto, ILoginResponseDto } from './services/misc';

const App = () => {
    const callApi = async () => {
        $$.loadingAnimation(true);
        const data = await userAuthenticationService.login<ILoginParamsDto, ILoginResponseDto>({
            email: 'sw33tsoda@gmail.com',
            password: 'K9n6sgmv',
        });

        console.log(data.token);

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
