import {
    HttpRequestMethods,
    IRequestError,
    IValidationResult,
    RequestErrorType,
    type IApiHelper,
    type TApiFetchHandler,
} from './misc';

const apiFetchHandler: TApiFetchHandler = async ({ url, method, params }) => {
    try {
        const options = {
            method,
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch('http://localhost:5053/api' + url, options);
        const data = await response.json();

        return response.ok ? data : apiFetchErrorHandler(data);
    } catch {
        console.log('An unknown error has occured during fetching API.');
    }
};

const apiFetchErrorHandler = (error: IRequestError<unknown>) => {
    switch (error.type) {
        case RequestErrorType.DTOVALIDATE:
            return dtoValidateErrorHandler(error as IRequestError<Array<IValidationResult>>);
        default:
            break;
    }
};

const dtoValidateErrorHandler = (error: IRequestError<Array<IValidationResult>>) => {
    // Should be implement after error handler
    return error;
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
