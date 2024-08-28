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
    abort: AbortController;
}
type TApiFetchHandlerReturnType<R> = Promise<R>;
type TApiFetchHandler = <P, R>(parameter: IFetchHelperParameters<P>) => TApiFetchHandlerReturnType<R>;

type IApiHelperImplementation = <P, R>(url: string, params: P) => TApiFetchHandlerReturnType<R>;

interface IApiHelper extends Record<HttpRequestMethods, IApiHelperImplementation> {}

interface IValidationResult {
    errorMessage?: string;
    memberNames: Array<string>;
}

interface IServerExceptionResponseDto<T = void> {
    type: ExceptionType;
    detailType: ExceptionDetailType;
    statusCode: number;
    message: string;
    correlationId: string;
    data: T;
}

enum ExceptionDetailType {
    ServerError = 0,
    UserDoesNotExist = 1,
    WrongPassword = 2,
}

enum ExceptionType {
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
    type IServerExceptionResponseDto,
    type TApiFetchHandlerReturnType,
    HttpRequestMethods,
    ExceptionType,
};
