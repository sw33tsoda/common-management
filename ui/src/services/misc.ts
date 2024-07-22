import { IUserAuthenticationServiceApiUrl, TApiServiceMethod } from '../constants/apiUrl/misc';

type TService<K> = Record<keyof TApiServiceMethod<K>, <P, R>(params: P) => Promise<R>>;

interface IUserAuthenticationService extends TService<IUserAuthenticationServiceApiUrl> {}

interface ILoginParamsDto {
    email: string;
    password: string;
}

interface ILoginResponseDto {
    token: string;
}

export {
    type TService,
    type IUserAuthenticationService,
    type ILoginParamsDto,
    type ILoginResponseDto,
};
