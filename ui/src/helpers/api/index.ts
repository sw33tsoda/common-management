import {
    HttpRequestMethods,
    IRequestError,
    IValidationResult,
    RequestErrorType,
    type IApiHelper,
    type TFetchHandler,
} from './misc';

const apiFetchHandler: TFetchHandler = async ({ url, method, params }) => {
    try {
        const options = {
            method,
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            const errors: IRequestError<IValidationResult> = data;
            if (errors.type.isEqual(RequestErrorType.DTOVALIDATE)) {
            }
        }
    } catch {
        console.log('An unknown error has occured during fetching API.');
    }
};

const api: IApiHelper = {
    [HttpRequestMethods.GET]: (url, params) =>
        apiFetchHandler({ url, params, method: HttpRequestMethods.GET }),
    [HttpRequestMethods.POST]: (url, params) =>
        apiFetchHandler({ url, params, method: HttpRequestMethods.POST }),
    [HttpRequestMethods.PUT]: (url, params) =>
        apiFetchHandler({ url, params, method: HttpRequestMethods.PUT }),
    [HttpRequestMethods.PATCH]: (url, params) =>
        apiFetchHandler({ url, params, method: HttpRequestMethods.PATCH }),
    [HttpRequestMethods.DELETE]: (url, params) =>
        apiFetchHandler({ url, params, method: HttpRequestMethods.DELETE }),
};

export { api };
