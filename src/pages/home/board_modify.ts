import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../Item/item';
import { BoardServiceProvider } from '../../providers/board-service/board-service';

@Component({
  selector:'page-board-modify',
  templateUrl:'./board_modify.html'
})

export class BoardModifyPage{

  item = {};
  pk: string;
  boardItem:Item;

  constructor(
      public navCtrl: NavController,
      private navParams: NavParams,
      private boardServiceProvider:BoardServiceProvider
  ) {
    this.item = this.navParams.get('item');
    this.pk = this.item["seq"];

  }

  confirm(){
    let params = {
      'pk' : this.pk
    };

    this.boardServiceProvider.updateItem(params)
    .then(
      res => {
        //팝업띄우고 처리하는 걸로....
        this.navCtrl.popToRoot();
      }
    )
    .catch(
      error => {
        console.log(error);
      }
    )
  }
}
