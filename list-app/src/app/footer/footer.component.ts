import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() load = new EventEmitter();
  more: boolean = true;
  less: boolean = false;


  loadMore(){
    console.log("loadmore");
    this.more = false;
    this.load.emit(true);
  }

  loadLess(){
    console.log("loadless");
    this.more = true;
    this.load.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
