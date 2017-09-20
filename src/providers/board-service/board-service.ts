import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpService } from '../http/httpService';

/*
  Generated class for the BoardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BoardServiceProvider {

  constructor(
      public http: Http,
      private httpService:HttpService
  ) {
    console.log('Hello BoardServiceProvider Provider');
  }

  callItemsList(){
      let api = 'http://192.168.0.151:8000/api/board/';

      return this.httpService.requestGet(api,{}).toPromise();
  }

  saveItem(params){
      let api = 'http://192.168.0.151:8000/api/board/';

      return this.httpService.requestPost(api,params).toPromise();
  }
}
