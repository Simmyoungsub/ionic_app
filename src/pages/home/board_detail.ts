import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,Platform } from 'ionic-angular';
import { BoardServiceProvider } from '../../providers/board-service/board-service';
import { BoardModifyPage } from './board_modify';
import { NavigationProvider } from '../../providers/board-service/navy';

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
      private alertCtrl:AlertController,
      private platform:Platform,
      private navProvider:NavigationProvider
  ) {
      this.pk = this.navParams.get('seq');
      this.getItem();
  }

  ionViewDidLoad() {
      this.platform.registerBackButtonAction(
          () => {
        this.navProvider.backButtonAction();
    });
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
