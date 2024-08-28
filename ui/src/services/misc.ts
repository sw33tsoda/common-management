import { TApiFetchHandlerReturnType } from '../helpers/api/misc';

interface IUserAuthenticationService {
    register: (params: IRegisterParamsDto) => TApiFetchHandlerReturnType<IRegisterResponseDto>;
    login: (params: ILoginParamsDto) => TApiFetchHandlerReturnType<ILoginResponseDto>;
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
