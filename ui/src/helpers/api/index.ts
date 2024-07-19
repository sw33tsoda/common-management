import { HttpRequestMethods, type IApiHelper, type TFetchHandler } from './misc';

const apiFetchHandler: TFetchHandler = async ({ url, method, params }) => {
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.log(error);
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
