import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Injectable()
export class HelperService {
    
    constructor(private platform: Platform,
                private network: Network){}

    async hasNetworkConnection(): Promise<boolean> {
        return await (() => {
            return new Promise<boolean>((resolve, reject)=>{
                this.platform.ready().then(()=>{

                    if(this.network && this.network.type)
                    {
                        resolve(this.network.type.toLowerCase() != 'none');
                    }
                    else{
                        // happens when on mobile. just resolve to true
                        resolve(true);
                    }
                });
            });
        })();
    }

    /*isDevice(): boolean {
        return !this.platform.is('core');
    }*/
}