import { Component,ViewChild } from '@angular/core';
import { NavController, AlertController,Platform  } from 'ionic-angular';
import { Item } from '../Item/item';
import { BoardServiceProvider } from '../../providers/board-service/board-service';
import { BoardDetailPage } from './board_detail';
import { NavigationProvider } from '../../providers/board-service/navy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

    items = Array<Item>();

    /**
        생성자
    */
    constructor(
        public navCtrl: NavController,
        private boardServiceProvider:BoardServiceProvider,
        private alertCtrl:AlertController,
        private platform: Platform,
        public navProvider:NavigationProvider
    ) {
        this.getItems();
    }

    ionViewDidLoad() {
        this.platform.registerBackButtonAction(
            () => {
          this.navProvider.backButtonAction();
      });
    }

    /**
        게시글 목록 생성
    */
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

    /**
        상세 페이지로 이동
    */
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

    /**
        게시글 삭제
    */
    deleteItem(item){
        this.boardServiceProvider.removeItem(item.seq)
        .then(
            res => {
                if(res.result.msg === 'success'){
                    let alert = this.alertCtrl.create({
                      title: '알림',
                      subTitle: '삭제를 완료하였습니다.',
                      buttons : [
                        {
                          text : '확인',
                          handler : () => {
                            this.getItems();
                          }
                        }
                      ]
                    });
                    alert.present();
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
                        this.getItems();
                      }
                    }
                  ]
                });
                alert.present();
            }
        )

    }
}
