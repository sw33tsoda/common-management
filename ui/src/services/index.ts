import { apiUrl } from '../constants';
import { api } from '../helpers';
import { type IUserAuthenticationService } from './misc';

const userAuthenticationService: IUserAuthenticationService = {
    register: (params) => api.post(apiUrl.userAuthentication.register_post, params),
    login: (params) => api.post(apiUrl.userAuthentication.login_post, params),
};

export { userAuthenticationService };
