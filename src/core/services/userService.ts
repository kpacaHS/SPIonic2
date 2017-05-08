import { Injectable } from '@angular/core';
import { StorageService } from './storageService';
import { AUTH_TOKEN_KEY } from '../constants/appKeys';

@Injectable()
export class UserService {
    constructor(private storageService: StorageService){}

    async authenticate(username: string = '', password: string = ''): Promise<AuthData> {
        return await (() => {
            return new Promise<AuthData>((resolve, reject)=>{

                // call api that will check user credentials

                // if true then will have to either use cookie or jwt that will have all the information.
                // this cookie or jwt (preferred) will then be passed back to the client and saved.
                // subsequent request will have this jwt/cookie in request.

                var token = '1k39dslkjfs0jqlk234ijasdflkajsd;flk=' // call api for this

                if(username && password && username.toLowerCase() === 'krispaks' && password.toLowerCase() === 'password')
                {
                    this.storageService.setItem(AUTH_TOKEN_KEY, { token: token });
                    resolve(new AuthData(true, token));
                }
                else
                {
                    reject(new AuthData(false, ''));
                }
            });
        })();
    }
}

export class AuthData {
    constructor(isAuthenticated: boolean, token: string){
        this.isAuthenticated = isAuthenticated;
        this.token = token;
    }
    isAuthenticated: boolean;
    token: string;
}