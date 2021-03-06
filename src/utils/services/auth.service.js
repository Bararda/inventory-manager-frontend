import Api from './api';

export default class AuthService {
    
    static async login(username, password) {
        const response = await Api.post('/auth/login', {
            username,
            password
        });
        if (response.success) {
            AuthService.refreshToken(parseInt(response.expiresIn));
            window.localStorage.setItem('authenticated', 'true');
            return true;
        }
        return false;
    }
    //TODO
    static async refreshToken(expiry) {
        setTimeout(async ()=> {
            const response = await Api.get('/auth/reissueToken');
            if (response.success) {
                AuthService.refreshToken(response.expiresIn);
            } else {
                window.localStorage.setItem('authenticated', 'false');
            }
        }, expiry - 1000);
    }

    static async logout() {
        await Api.delete('/auth/logout');
        window.localStorage.setItem('authenticated', 'false');
        window.location.assign(window.location.origin + '/');
    }

}

