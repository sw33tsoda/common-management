import {
    HttpRequestMethods,
    IServerExceptionResponseDto,
    IValidationResult,
    ExceptionType,
    type IApiHelper,
    type TApiFetchHandler,
} from './misc';

const apiFetchHandler: TApiFetchHandler = async ({ url, method, params }) => {
    try {
        const requestInit: RequestInit = {
            method,
            headers: {
                ['Content-Type']: 'application/json',
                ['Authorization']: `Bearer ${$$.cookie.getAccessToken()}`,
            },
            credentials: 'include',
        };

        if (method !== HttpRequestMethods.GET) {
            requestInit.body = JSON.stringify(params);
        }

        const response = await fetch('http://localhost:5053/api' + url, requestInit);
        const data = await response.json();

        return response.ok ? data : apiFetchErrorHandler(data);
    } catch (e) {
        console.log('An unknown error has occured during fetching API.', e);
    }
};

const apiFetchErrorHandler = (error: IServerExceptionResponseDto<unknown>) => {
    switch (error.type) {
        case ExceptionType.DtoValidate:
            return dtoValidateErrorHandler(error as IServerExceptionResponseDto<Array<IValidationResult>>);

        default:
            return commonErrorHandler(error as IServerExceptionResponseDto);
    }

    return;
};

const dtoValidateErrorHandler = (error: IServerExceptionResponseDto<Array<IValidationResult>>) => {
    // TODO:
    return error;
};

const commonErrorHandler = (error: IServerExceptionResponseDto) => {
    // TODO:
    return error;
};

const api: IApiHelper = {
    [HttpRequestMethods.GET]: (url, params) => apiFetchHandler({ url, params, method: HttpRequestMethods.GET }),
    [HttpRequestMethods.POST]: (url, params) => apiFetchHandler({ url, params, method: HttpRequestMethods.POST }),
    [HttpRequestMethods.PUT]: (url, params) => apiFetchHandler({ url, params, method: HttpRequestMethods.PUT }),
    [HttpRequestMethods.PATCH]: (url, params) => apiFetchHandler({ url, params, method: HttpRequestMethods.PATCH }),
    [HttpRequestMethods.DELETE]: (url, params) => apiFetchHandler({ url, params, method: HttpRequestMethods.DELETE }),
};

export { api };
