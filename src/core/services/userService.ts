import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor(){}

    async authentication(username: string, password: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject)=>{

            // call api that will check user credentials

            // if true then will have to either use cookie or jwt that will have all the information.
            // this cookie or jwt (preferred) will then be passed back to the client and saved.
            // subsequent request will have this jwt/cookie in request.

            var token = '1k39dslkjfs0jqlk234ijasdflkajsd;flk=' // call api for this

            if(username.toLowerCase() === 'krispaks' && password.toLowerCase() === 'password')
            {
                
                resolve(true);
            }
            else
            {
                reject(false);
            }
        });
    }
}