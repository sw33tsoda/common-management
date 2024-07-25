interface IUserAuthenticationServiceApiUrl {
    login_post: string;
    register_post: string;
}

interface IUserAuthenticationService {
    userAuthentication: IUserAuthenticationServiceApiUrl;
}

interface IApiUrl extends IUserAuthenticationService {}

export { type IApiUrl, type IUserAuthenticationService, type IUserAuthenticationServiceApiUrl };
