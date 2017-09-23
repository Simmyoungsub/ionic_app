import { Component,OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Item } from '../Item/item';
import { BoardServiceProvider } from '../../providers/board-service/board-service';
import { BoardDetailPage } from './board_detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

    items = Array<Item>();

    constructor(
        public navCtrl: NavController,
        private boardServiceProvider:BoardServiceProvider,
        private alertCtrl:AlertController
    ) {
        this.getItems();
    }

    ngOnInit(){
        console.log('load');
    }

    getItems(){
        let promise = this.boardServiceProvider.callItemsList();

        promise.then(
            res => {
                if(res.result.msg === 'success'){
                    this.items = [];
                    let list = res.result.items;

                    for(let i=0;i<list.length;i++){
                        let item = new Item();
                        item["title"] = list[i]["title"];
                        item["seq"] = list[i]["seq"];
                        item["content"] = list[i]["content"];
                        this.items.push(item);
                    }
                }
            }
        )
        .catch(
            error => {
                console.log(error);
                let alert = this.alertCtrl.create({
                  title: '알림',
                  subTitle: '처리중 오류가 발생하였습니다.',
                  buttons : [
                    {
                      text : '확인',
                      handler : () => {
                        this.navCtrl.popToRoot();
                      }
                    }
                  ]
                });
                alert.present();
            }
        )

        return promise;

    }

    viewItem(seq){
      this.navCtrl.push(BoardDetailPage,{'seq':seq});
    }
    /**
        refresher 시 호출되는 콜백
    */
    doRefresh(refresher){
        setTimeout(
            () => {
                this.getItems().then(
                    res => {
                        refresher.complete();
                    }
                )
            },1000
        )
    }

    /**
        navigating시 콜하는 함수
        navigating life cycle 참고
        http://blog.ionic.io/navigating-lifecycle-events/
    */
    ionViewWillEnter(){
        this.getItems();
    }
}
