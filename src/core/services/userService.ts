import { Injectable } from '@angular/core';
import { StorageService } from './storageService';
import { AUTH_TOKEN_KEY } from '../constants/appKeys';

@Injectable()
export class UserService {
    constructor(private storageService: StorageService){}

    async authenticate(username: string, password: string): Promise<boolean> {
        /*return new Promise<boolean>((resolve, reject)=>{

            // call api that will check user credentials

            // if true then will have to either use cookie or jwt that will have all the information.
            // this cookie or jwt (preferred) will then be passed back to the client and saved.
            // subsequent request will have this jwt/cookie in request.

            var token = '1k39dslkjfs0jqlk234ijasdflkajsd;flk=' // call api for this

            if(username.toLowerCase() === 'krispaks' && password.toLowerCase() === 'password')
            {
                this.storageService.setItem(AUTH_TOKEN_KEY, { token: token});
                resolve(true);
            }
            else
            {
                reject(false);
            }
        });*/

        return await (() => {
            return new Promise<boolean>((resolve, reject)=>{

                // call api that will check user credentials

                // if true then will have to either use cookie or jwt that will have all the information.
                // this cookie or jwt (preferred) will then be passed back to the client and saved.
                // subsequent request will have this jwt/cookie in request.

                var token = '1k39dslkjfs0jqlk234ijasdflkajsd;flk=' // call api for this

                /*if(username.toLowerCase() === 'krispaks' && password.toLowerCase() === 'password')
                {
                    this.storageService.setItem(AUTH_TOKEN_KEY, { token: token});
                    resolve(true);
                }
                else
                {
                    reject(false);
                }*/

                this.storageService.setItem(AUTH_TOKEN_KEY, { token: token});
                resolve(false);
            });
        })();
    }
}