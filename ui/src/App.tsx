import { Button, ButtonColor, ButtonVariant, TextInput, TextInputSize, TextInputVariant } from './components';
import { Loading } from './components/Loading';
import { api } from './helpers';
import { createClassNames } from './helpers/common';
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
            <button onClick={callApi}>call api</button>
            <Loading />

            <br />
            <br />
            <TextInput placeholder='Please enter password' size={TextInputSize.Small} />
            <br />
            <br />
            <TextInput placeholder='Please enter password' size={TextInputSize.Small} error />

            <br />
            <br />
            <TextInput placeholder='Please enter password' />
            <br />
            <br />
            <TextInput placeholder='Please enter password' error />
            <br />
            <br />
            <TextInput placeholder='Please enter password' size={TextInputSize.Large} />
            <br />
            <br />
            <TextInput placeholder='Please enter password' size={TextInputSize.Large} error />

            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Small}
                variant={TextInputVariant.Outlined}
            />
            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Small}
                variant={TextInputVariant.Outlined}
                error
            />
            <br />
            <br />
            <TextInput placeholder='Please enter password' variant={TextInputVariant.Outlined} />
            <br />
            <br />
            <TextInput placeholder='Please enter password' variant={TextInputVariant.Outlined} error />
            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Large}
                variant={TextInputVariant.Outlined}
            />
            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Large}
                variant={TextInputVariant.Outlined}
                error
            />

            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Small}
                variant={TextInputVariant.Solid}
            />
            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Small}
                variant={TextInputVariant.Solid}
                error
            />
            <br />
            <br />
            <TextInput placeholder='Please enter password' variant={TextInputVariant.Solid} />
            <br />
            <br />
            <TextInput placeholder='Please enter password' variant={TextInputVariant.Solid} error />
            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Large}
                variant={TextInputVariant.Solid}
            />

            <br />
            <br />
            <TextInput
                placeholder='Please enter password'
                size={TextInputSize.Large}
                variant={TextInputVariant.Solid}
                error
            />
        </div>
    );
};

export default App;
