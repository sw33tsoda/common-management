import { apiUrl } from '../constants';
import { api } from '../helpers';
import { type IUserAuthenticationService } from './misc';

const userAuthenticationService: IUserAuthenticationService = {
    register: (params) => api.post({ url: apiUrl.userAuthentication.register_post, params }),
    login: (params, signal) => api.post({ url: apiUrl.userAuthentication.login_post, signal, params }),
};

export { userAuthenticationService };
