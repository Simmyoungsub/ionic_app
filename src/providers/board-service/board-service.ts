import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpService } from '../http/httpService';
import { httpInfo } from '../http/httpInfo';

/*
  Generated class for the BoardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BoardServiceProvider {
  //api:string = 'http://192.168.0.151:8000/api/board/';
  api:string = httpInfo["baseUrl"];

  constructor(
      public http: Http,
      private httpService:HttpService
  ) {

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
    let url = this.api + params["pk"]+'/';
    return this.httpService.requestGet(url,params).toPromise();
  }

  removeItem(pk){
      let url = this.api + pk + '/';
      return this.httpService.requestDelete(url).toPromise();
  }
}
