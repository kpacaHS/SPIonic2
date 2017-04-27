import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class StorageService implements IStorageService {
    constructor(private nativeStorage: NativeStorage){

    }

    setItem(key: string, value: any):  Promise<void> {
        return this.nativeStorage.setItem(key, value);
    }
}

export interface IStorageService {
    setItem(key: string, value: any): Promise<void>;
}