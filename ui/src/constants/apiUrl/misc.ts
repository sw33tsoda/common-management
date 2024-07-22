interface IUserAuthenticationServiceApiUrl {
    login_post: string;
    register_post: string;
}

interface IUserAuthenticationService {
    userAuthentication: IUserAuthenticationServiceApiUrl;
}

interface IApiUrl extends IUserAuthenticationService {}

type TApiServiceMethod<T> = {
    [K in keyof T as K extends `${infer R}_${infer S}` ? R : K]: T[K];
};

export {
    type IApiUrl,
    type IUserAuthenticationService,
    type IUserAuthenticationServiceApiUrl,
    type TApiServiceMethod,
};
