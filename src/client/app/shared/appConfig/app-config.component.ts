import { Injectable } from '@angular/core';

@Injectable()
export class appConfig {
    
    host: string = 'http://www.spanielovasvj.cz';
    
    hostApi: string = `${this.host}/api`;

    hostUpload: string = `${this.hostApi}/upload`;
}
