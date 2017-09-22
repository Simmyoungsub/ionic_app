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

  constructor(public http: Http) {
    console.log('Hello BoardServiceProvider Provider');
  }


  requestGet(url,params){
    //   url += '?';

      let headers = new Headers({'Content-Type':'application/json'})

    //   for(let key in params){
    //     url += key + '=' + params[key]+"&";
    //   }
      //
      //
    //   if(url[url.length-1] === "&"){
    //       url = url.slice(0,-1);
    //       url += '/';
    //   }

      console.log(url);

      return this.http.get(url,{headers:headers}).map(res=>res.json());
  }

  requestPost(url,params){
      let headers = new Headers({'Content-Type':'application/json'});

      return this.http.post(url,JSON.stringify(params),{headers:headers}).map(res => res.json());
  }

  requestPut(url,params){
      let headers = new Headers({'Content-Type':'application/json'});

      return this.http.put(url,JSON.stringify(params),{headers:headers}).map(res => res.json());
  }
}
