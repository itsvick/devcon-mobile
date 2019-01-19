import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //sampleData

  constructor(public navCtrl: NavController) {

  }

  datas = [
    {
     title:'content1',
     thumbnail : 'https://www.amplifymm.com/wp-content/uploads/2013/12/GTD-for-Content-Marketing-01.jpeg',
     linkUrl : 'link_1'
    },{
      title:'content1',
      thumbnail : 'https://www.amplifymm.com/wp-content/uploads/2013/12/GTD-for-Content-Marketing-01.jpeg',
      linkUrl : 'link_1'
     },{
      title:'content2',
      thumbnail : 'https://www.amplifymm.com/wp-content/uploads/2013/12/GTD-for-Content-Marketing-01.jpeg',
      linkUrl : 'link_1'
     },{
      title:'content3',
      thumbnail : 'https://www.amplifymm.com/wp-content/uploads/2013/12/GTD-for-Content-Marketing-01.jpeg',
      linkUrl : 'link_1'
     },{
      title:'content4',
      thumbnail : 'https://www.amplifymm.com/wp-content/uploads/2013/12/GTD-for-Content-Marketing-01.jpeg',
      linkUrl : 'link_1'
     },{
      title:'content5',
      thumbnail : 'https://www.amplifymm.com/wp-content/uploads/2013/12/GTD-for-Content-Marketing-01.jpeg',
      linkUrl : 'link_1'
     }
  ]

}
