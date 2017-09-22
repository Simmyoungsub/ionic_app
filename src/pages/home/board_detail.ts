import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
      private boardServiceProvider:BoardServiceProvider
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
        this.boardItem = new Item();
        this.boardItem["title"] = 'news';
        this.boardItem["content"] = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      }
    )
    // let n = new Item();
    // n.title = "news";
    // this.boardItem = n;
    // this.boardItem["content"] = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  }

  goModify(pk){
    this.navCtrl.push(BoardModifyPage,{'item':this.boardItem});
  }
}
