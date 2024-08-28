import { useRef } from 'react';
import { Button, Loading, Text, TextInput, TextInputSize, TextInputVariant, TextSize } from './components';
import { api } from './helpers/api';
import { userAuthenticationService } from './services';

const TestPlayground = () => {
    const loginServiceToken = useRef(null);

    const callApi = async () => {
        $$.loadingAnimation(true);
        const data = await userAuthenticationService.login({
            email: 'sw33tsoda@gmail.com',
            password: 'K9n6sgmv',
        });

        console.log(data);

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
        <>
            <Text size={TextSize.Small}>Are you good?</Text>
            <Text>Are you good?</Text>
            <Text size={TextSize.Large}>Are you good?</Text>

            <Button>ABC</Button>

            <br />
            <br />
            <br />

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
        </>
    );
};

export default TestPlayground;
