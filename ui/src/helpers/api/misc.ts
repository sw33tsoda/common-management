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

type TApiFetchHandler = <P, R>(parameter: IFetchHelperParameters<P>) => Promise<R>;

type IApiHelperImplementation = <P, R>(url: string, params: P) => Promise<R>;

interface IApiHelper extends Record<HttpRequestMethods, IApiHelperImplementation> {}

interface IValidationResult {
    errorMessage?: string;
    memberNames: Array<string>;
}

interface IRequestError<T = void> {
    type: RequestErrorType;
    data: T;
}

enum RequestErrorType {
    ServerError = 0,
    DtoValidate = 1,
    ResourceNotFound = 2,
    Unauthorized = 3,
}

export {
    type TApiFetchHandler,
    type IApiHelper,
    type IApiHelperImplementation,
    type IValidationResult,
    type IRequestError,
    HttpRequestMethods,
    RequestErrorType,
};
