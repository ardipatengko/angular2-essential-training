import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';


@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;
  mediaItemGet;
  
  constructor(private mediaItemService: MediaItemService) {}
  edited = true;

  parentShow(param){
    this.edited = param[0];
    this.mediaItemGet = param[1];
  }

  parentClose(param){
    this.edited = param;
  }

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }

  /*
  onMediaItemDelete(mediaItem) {
    this.mediaItems.slice(this.mediaItems.indexOf(mediaItem));
    //console.log(this.mediaItems.indexOf(mediaItem));
   }
   */

  
}
