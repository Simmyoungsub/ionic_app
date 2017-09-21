import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../Item/item';
import { BoardServiceProvider } from '../../providers/board-service/board-service';
import { BoardDetailPage } from './board_detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    items = Array<Item>();

    constructor(
        public navCtrl: NavController,
        private boardServiceProvider:BoardServiceProvider
    ) {
        this.getItems();
    }

    getItems(){
        // this.boardServiceProvider.callItemsList()
        // .then(
        //     res => {
        //         if(res.result.msg === 'success'){
        //             let list = res.result.items;
        //
        //             for(let i=0;i<list.length;i++){
        //                 let item = new Item();
        //                 item["title"] = list[i]["title"];
        //                 item["seq"] = list[i]["seq"];
        //                 this.items.push(item);
        //             }
        //         }else{
        //             for(let i=0;i<5;i++){
        //                 let item = new Item();
        //                 item["title"] = 'news';
        //                 item["seq"] = i+1;
        //                 this.items.push(item);
        //             }
        //         }
        //     }
        // )
        // .catch(
        //     error => {
        //         console.log(error);
        //         for(let i=0;i<5;i++){
        //             let item = new Item();
        //             item["title"] = 'news';
        //             item["seq"] = i+1;
        //             this.items.push(item);
        //         }
        //     }
        // )
        for(let i=0;i<5;i++){
            let item = new Item();
            item["title"] = 'news';
            item["content"] = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
            item["seq"] = i+1;
            this.items.push(item);
        }
    }

    viewItem(seq){
      this.navCtrl.push(BoardDetailPage,{'seq':seq});
    }

    saveItems(){
        // this.boardServiceProvider.saveItem(item)
        // .then(
        //     res => {
        //         console.log(res);
        //     }
        // )
        // .catch(
        //     error => {
        //         console.log(error);
        //     }
        // );
    }
}
