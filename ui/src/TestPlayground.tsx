import { Button, Loading, Text, TextInput, TextInputSize, TextInputVariant, TextSize } from './components';
import { useAbortController } from './helpers';
import { userAuthenticationService } from './services';

const TestPlayground = () => {
    const loginApiCancel = useAbortController();

    const callApi = async () => {
        const data = await userAuthenticationService.login(
            {
                email: 'sw33tsoda@gmail.com',
                password: 'K9n6sgmv',
            },
            loginApiCancel.signal,
        );
        console.log('cancelling.');
    };

    const handleCancelApi = () => {
        loginApiCancel.abort('yeah');
    };

    const getToken = () => {
        console.log($$.cookie.getAccessToken());
    };

    return (
        <>
            <button onClick={handleCancelApi}>cancel api</button>

            <Text size={TextSize.Small}>Are you good?</Text>
            <Text>Are you good?</Text>
            <Text size={TextSize.Large}>Are you good?</Text>

            <Button>ABC</Button>

            <br />
            <br />
            <br />

            <button onClick={getToken}>click to test token</button>
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
        </>
    );
};

export default TestPlayground;
