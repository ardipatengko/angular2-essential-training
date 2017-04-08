import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})

export class PopupComponent {
  @Input() mediaItem;
  @Output() close = new EventEmitter();

  position = 1;

  images = [
    {
      id: 1,
      path: 'media/img1.jpg'
    },
    {
      id: 2,
      path: 'media/img2.jpg'
    },
    {
      id: 3,
      path: 'media/01.png'
    }
    ,
    {
      id: 4,
      path: 'media/02.png'
    }
  ]
  
  prev(){
    if(!(this.position <= 1)){
      this.position -= 1;
    }
    
  }

  next(){
    if(!(this.position >= 4)){
      this.position += 1;
    }
  }
  
  onClosePopup(){
    this.close.emit(true);
  }
 }