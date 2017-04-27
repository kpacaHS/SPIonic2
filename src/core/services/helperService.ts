import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Injectable()
export class HelperService {
    
    constructor(private platform: Platform,
                private network: Network){

                }

    async hasNetworkConnection(): Promise<boolean> {
        return await (() => {
            return new Promise<boolean>((resolve, reject)=>{
            this.platform.ready().then(()=>{
                resolve(this.network.type.toLowerCase() != 'none');
                });
            });
        })();
    }
}