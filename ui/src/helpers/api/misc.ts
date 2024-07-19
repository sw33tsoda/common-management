enum HttpRequestMethods {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete',
}

interface IFetchHelperParameters<P> {
    url: string;
    method: HttpRequestMethods;
    params: P;
}

type TFetchHandler = <P, R>(parameter: IFetchHelperParameters<P>) => Promise<R>;

type IApiHelperImplementation = <P, R>(url: string, params: P) => Promise<R>;

interface IApiHelper extends Record<HttpRequestMethods, IApiHelperImplementation> {}

export { type IApiHelper, HttpRequestMethods, type TFetchHandler, type IApiHelperImplementation };
