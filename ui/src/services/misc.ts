interface IUserAuthenticationService {
    register: (params: IRegisterParamsDto) => Promise<IRegisterResponseDto>;
    login: (params: ILoginParamsDto) => Promise<ILoginResponseDto>;
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
