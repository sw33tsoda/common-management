import { Button, ButtonColor, ButtonVariant } from './components';
import { Loading } from './components/Loading';
import { api } from './helpers';
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

    const getToken = () => {
        console.log($$.cookie.getAccessToken());
    };

    const test = () => {
        api.post('/auth/api-test', {
            email: 'user@example.com',
            password: 'string',
        }).then((data) => {
            console.log(data);
        });
    };

    return (
        <div className='app'>
            <button onClick={getToken}>click to test token</button>
            <button onClick={test}>click to test api</button>
            <Button variant={ButtonVariant.Outlined}>Happy</Button>
            <Button variant={ButtonVariant.Plain}>New</Button>
            <Button variant={ButtonVariant.Solid}>Year</Button>

            <Button variant={ButtonVariant.Outlined} color={ButtonColor.Danger}>
                Happy
            </Button>
            <Button variant={ButtonVariant.Plain} color={ButtonColor.Danger}>
                New
            </Button>
            <Button variant={ButtonVariant.Solid} color={ButtonColor.Danger}>
                Year
            </Button>

            <Button variant={ButtonVariant.Outlined} color={ButtonColor.Warning}>
                Happy
            </Button>
            <Button variant={ButtonVariant.Plain} color={ButtonColor.Warning}>
                New
            </Button>
            <Button variant={ButtonVariant.Solid} color={ButtonColor.Warning}>
                Year
            </Button>

            <button onClick={callApi}>call api</button>
            <Loading />
        </div>
    );
};

export default App;
