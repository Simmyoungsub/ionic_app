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
  api:string = 'http://192.168.0.151:8000/api/board/';
  constructor(
      public http: Http,
      private httpService:HttpService
  ) {
    // console.log('Hello BoardServiceProvider Provider');
  }

  callItemsList(){
      return this.httpService.requestGet(this.api,{}).toPromise();
  }

  saveItem(params){
      return this.httpService.requestPost(this.api,params).toPromise();
  }

  updateItem(params){
    return this.httpService.requestPut(this.api,params).toPromise();
  }

  callItem(params){
    return this.httpService.requestGet(this.api,params).toPromise();
  }
}
