import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Item } from '../Item/item';
import { BoardServiceProvider } from '../../providers/board-service/board-service';

@Component({
  selector:'page-board-modify',
  templateUrl:'./board_modify.html'
})

export class BoardModifyPage{

  item = {'title':'','content':''};
  pk: string;
  boardItem:Item;

  constructor(
      public navCtrl: NavController,
      private navParams: NavParams,
      private boardServiceProvider:BoardServiceProvider,
      private alertCtrl:AlertController
  ) {
    this.item = this.navParams.get('item');
    this.pk = this.item["seq"];

  }

  confirm(){
    let params = {
      'pk' : this.pk,
      'title' : this.item.title,
      'content' :  this.item.content
    };

    this.boardServiceProvider.updateItem(params)
    .then(
      res => {
          let alert = this.alertCtrl.create({
            title: '알림',
            subTitle: '저장되었습니다.',
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
    .catch(
      error => {
        console.log(error);
      }
    )
  }
}
