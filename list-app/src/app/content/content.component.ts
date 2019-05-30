import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
//import { routerTransition } from '../routeAnimations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() UNID: number;
  @Input() id: number;
  @Input() image: string;
  @Input() main: string;
  @Input() sub: string;
  @Input() desc: string;
  @Input() date: string;
  //@Input() newItem: boolean;
  @Output() delete = new EventEmitter();
  show: boolean = false;

  deleteItem(e){
    this.delete.emit(e);
  }


  constructor() { }

  ngOnInit() {
  }

}
