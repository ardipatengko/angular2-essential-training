import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})

export class PopupComponent {
  @Input() mediaItem;
  @Output() close = new EventEmitter();
  
  onClosePopup(){
    this.close.emit(true);
  }
 }

