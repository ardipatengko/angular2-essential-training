import { Pipe } from '@angular/core';

@Pipe({
  name: 'studentIdConvertingList'
})

export class StudentIdConvertingListPipe {
  transform(mediaItem){
    var data = mediaItem.toString(); //mediaItem.id.substring(2, 4);
    //console.log(data.substring(2, 3));
    return data.substring(2,6);
  }
}