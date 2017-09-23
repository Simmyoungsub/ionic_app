import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Item } from '../Item/item';
import { BoardServiceProvider } from '../../providers/board-service/board-service';
import { BoardModifyPage } from './board_modify';

@Component({
  selector:'page-board-detail',
  templateUrl:'./board_detail.html'
})

export class BoardDetailPage{

  pk:string = '';
  boardItem = {};

  constructor(
      public navCtrl: NavController,
      private navParams: NavParams,
      private boardServiceProvider:BoardServiceProvider,
      private alertCtrl:AlertController
  ) {
    this.pk = this.navParams.get('seq');
    this.getItem();
  }

  getItem(){
    let params = {
      'pk' : this.pk
    };

    this.boardServiceProvider.callItem(params)
    .then(
      res => {
        this.boardItem = res.result.item;
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
  }

  goModify(pk){
    this.navCtrl.push(BoardModifyPage,{'item':this.boardItem});
  }
}
