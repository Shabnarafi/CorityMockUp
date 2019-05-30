import { Component, OnInit } from '@angular/core';
import { list } from '../list';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  lists: any[] = list;
  d: any = new Date();
  listCount: number;
  show: boolean;
  showModal: boolean;
  count: number=0;

  

  showContent(e){
    console.log("called show content");
    if(!e){
      this.show = e;
    }
    else{
      this.show = e;
    }
    
  }

  showMore(e){
    this.lists = [];
    if(e){
      for(let i=0; i<list.length; i++){
        this.lists.push(list[i]);
      }
      this.listCount = this.lists.length;
    }
    if(!e){
      for(let i=0; i<3;i++){
        this.lists.push(list[i]);
      }
      this.listCount = 3;
    }
  }

  deleteItem(e){
    console.log(e);
    let item = e.srcElement.id;
    for(let i=0; i<list.length;i++){
      if(list[i].id == item){
        list.splice(item, 1);
      }
    }
    this.listCount = list.length;
    this.lists = [];
    this.lists = list;
    console.log(this.lists);
  }

  onPlusClick(e){
    if(e){
      this.showModal = true;
    }
    
  }

  addItem(e){
    let item = e
    list.unshift(item);
    this.lists = list;
    this.count++;
    this.showModal = false;
    this.listCount = this.lists.length;
  }

  dismiss(e){
    if(e){
      this.showModal = false;
    }
  }

  constructor() { }

  ngOnInit() {
    this.lists = [];
    for(let i=0; i<3;i++){
      this.lists.push(list[i]);
    }
    let date = this.d.toString();
    this.d = date.substr(0, 15);
    this.listCount = this.lists.length;
    this.show = true;
  }

}
