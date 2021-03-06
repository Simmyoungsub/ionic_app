import { Component } from '@angular/core';
import { NavController, AlertController,Platform } from 'ionic-angular';
import { BoardServiceProvider } from '../../providers/board-service/board-service';
import { NavigationProvider } from '../../providers/board-service/navy';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage{

  item = {'title':'','content':''};

  constructor(
    public navCtrl: NavController,
    private boardServiceProvider:BoardServiceProvider,
    private alertCtrl:AlertController,
    private platform:Platform,
    private navProvider:NavigationProvider
  ) {

  }

  ionViewDidLoad() {
      this.platform.registerBackButtonAction(
          () => {
        this.navProvider.backButtonAction();
    });
  }

  saveItem(){
    this.boardServiceProvider.saveItem(this.item)
    .then(
      res => {
          let alert = this.alertCtrl.create({
            title: '알림',
            subTitle: '저장되었습니다.',
            buttons : [
              {
                text : '확인',
                handler : () => {
                  this.item = {'title':'','content':''};
                  this.navCtrl.parent.select(0);
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
        let alert = this.alertCtrl.create({
          title: '알림',
          subTitle: '처리중 오류가 발생하였습니다.',
          buttons : [
            {
              text : '확인',
              handler : () => {
                this.item = {'title':'','content':''};
                this.navCtrl.popToRoot();
              }
            }
          ]
        });
        alert.present();
      }
    )
  }

  cancel(){
    this.navCtrl.parent.select(0);
  }
}
