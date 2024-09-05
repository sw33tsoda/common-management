import { TApiFetchHandlerReturnType } from '../helpers/api/misc';

interface IUserAuthenticationService {
    register: (params: IRegisterParamsDto, token?: AbortSignal) => TApiFetchHandlerReturnType<IRegisterResponseDto>;
    login: (params: ILoginParamsDto, token?: AbortSignal) => TApiFetchHandlerReturnType<ILoginResponseDto>;
}

/**
 * Register
 */
interface IRegisterParamsDto {
    email: string;
    password: string;
}

interface IRegisterResponseDto {}

/**
 * Login
 */
interface ILoginParamsDto {
    email: string;
    password: string;
}

interface ILoginResponseDto {
    token: string;
}

export { type IUserAuthenticationService, type ILoginParamsDto, type ILoginResponseDto };
