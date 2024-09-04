import {
    HttpRequestMethods,
    IServerExceptionResponseDto,
    IValidationResult,
    ExceptionType,
    type IApiHelper,
    type TApiFetchHandler,
} from './misc';

const apiFetchHandler: TApiFetchHandler = async ({ url, method, params, abort }) => {
    try {
        const requestInit: RequestInit = {};
        const headers = new Headers();
        abort = new AbortController();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${$$.cookie.getAccessToken()}`);
        requestInit.method = method;
        requestInit.headers = headers;
        requestInit.credentials = 'include';
        requestInit.signal = abort.signal;

        if (method !== HttpRequestMethods.GET) requestInit.body = JSON.stringify(params);

        const response = await fetch(import.meta.env.VITE_API_BASE_URL + url, requestInit);
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
