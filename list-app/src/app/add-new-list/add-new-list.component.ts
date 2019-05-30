import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css']
})
export class AddNewListComponent implements OnInit {
  id: number;
  main: string;
  sub: string;
  content: string;
  @Output() item = new EventEmitter();
  @Output() close = new EventEmitter();
  obj: any = {};

  addItem(){
    this.id = document.forms["myForm"]["id"].value
    this.main = document.forms["myForm"]["main"].value;
    this.sub = document.forms["myForm"]["sub"].value;
    this.content = document.forms["myForm"]["content"].value;
    this.obj = {
      id: this.id,
      main: this.main,
      sub: this.sub,
      content: this.content
    }
    document.forms["myForm"]["id"].value = '';
    document.forms["myForm"]["main"].value = '';
    document.forms["myForm"]["sub"].value = '';
    document.forms["myForm"]["content"].value = '';
    this.item.emit(this.obj);
  }

  cancelItem(){
    document.forms["myForm"]["id"].value = '';
    document.forms["myForm"]["main"].value = '';
    document.forms["myForm"]["sub"].value = '';
    document.forms["myForm"]["content"].value = '';

  }

  dismiss(){
    this.close.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
