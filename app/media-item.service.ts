export class MediaItemService {
  get() {
    return this.mediaItems;
  }
  
  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }
  
  delete(mediaItem) {
    let index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0) {
      this.mediaItems.splice(index, 1);
    }
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
      photo: './media/male1.jpg',
      isFavorite: false
    },
    {
      id: 672011002,
      name: "Budi Permana",
      medium: "Male",
      category: "Data Analyst",
      year: 2015,
      watchedOn: 1288323623006,
      quotes: "Lazy is my friend.",
      photo: './media/male2.jpg',
      isFavorite: true
    }, {
      id: 672011003,
      name: "Cheery",
      medium: "Female",
      category: "Networking",
      year: 2016,
      watchedOn: 1288323623006,
      quotes: "I'm always beautiful.",
      photo: './media/female1.jpg',
      isFavorite: false
    }
  ];
}