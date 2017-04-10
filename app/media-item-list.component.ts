import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  edited = true;

  parentShow(param){
    this.edited = param;
  }

  parentClose(param){
    this.edited = param;
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItems.slice(this.mediaItems.indexOf(mediaItem));
    //console.log(this.mediaItems.indexOf(mediaItem));
   }

  mediaItems = [
    {
      id: 672011001,
      name: "Ardi Pratama Patengko",
      medium: "Male", //sex from mediumn : Series
      category: "Application Development", //konsentrasi
      year: 2014, //graduation year
      watchedOn: 1294166565384,
      quotes: "Always do your best. Never give up.",
      isFavorite: false
    },
    {
      id: 672011002,
      name: "Budi Novianto",
      medium: "Male",
      category: "Data Analyst",
      year: 2015,
      watchedOn: null,
      quotes: "Lazy is my friend.",
      isFavorite: true
    }, {
      id: 672011003,
      name: "Cheery",
      medium: "Female",
      category: "Networking",
      year: 2016,
      watchedOn: null,
      quotes: "I'm always beautiful.",
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Female",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Female",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];
}
