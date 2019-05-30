import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() total: number;
  @Input() newCount: number = 0;
  @Output() collapseEvent = new EventEmitter<boolean>();
  @Output() modal = new EventEmitter<boolean>();
  upCaret: boolean = true;
  downCaret: boolean = false;

  constructor() { }

  collapse(){
    if(this.upCaret){
      this.downCaret = true;
      this.upCaret = false;
    this.collapseEvent.emit(false);
    }
    else{
      this.upCaret = true;
      this.downCaret = false;
      this.collapseEvent.emit(true);
    }
    
  }

  showModal(){
    this.modal.emit(true);
  }

  

  ngOnInit() {
    
  }

}
