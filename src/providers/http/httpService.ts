import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the BoardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpService {
    headers = new Headers({'Content-Type':'application/json'});

    constructor(public http: Http) {
        console.log('Hello BoardServiceProvider Provider');
    }

    requestGet(url,params){
        return this.http.get(url,{headers:this.headers}).map(res=>res.json());
    }

    requestPost(url,params){
        console.log(url,params);
        return this.http.post(url,JSON.stringify(params),{headers:this.headers}).map(res => res.json());
    }

    requestPut(url,params){
        return this.http.put(url,JSON.stringify(params),{headers:this.headers}).map(res => res.json());
    }

    requestDelete(url){
        return this.http.delete(url,{headers:this.headers}).map(res => res.json());
    }
}
