import { useState } from 'react';

/**
 * This hook handles cancelling API
 * @param { string } apiName - Name of API, once the API is cancelled, an error will be thrown, which includes a string representing for api's name
 * @returns { object } An object contains signal object which is used to pass into fetch api and an abort function which is used to cancel pending api
 */
const useAbortController = (apiName?: string) => {
    const [abortController, setAbortController] = useState(new AbortController());

    const reset = () => {
        setAbortController(new AbortController());
    };

    const signal = abortController.signal;

    const abort = (reason: string = `Cancelling ${apiName ?? ''} API`) => {
        abortController.abort(reason);
        reset();
    };

    return { signal, abort };
};

export { useAbortController };
