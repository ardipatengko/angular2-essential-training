import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MediaItemService } from './media-item.service';
import { sexListToken } from './providers';
import { expertiseListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(
    private mediaItemService : MediaItemService,
    @Inject(sexListToken) public sexList,
    @Inject(expertiseListToken) public expertiseList) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl('', Validators.compose([
        this.idValidator//Validators.required,
      ])),
      medium: new FormControl('Male'),
      name: new FormControl('', ),//Validators.required),
      category: new FormControl('Application Development'),
      year: new FormControl('', ),//Validators.required),
      quotes: new FormControl('')
    });
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
    //console.log(mediaItem);
  }

  idValidator(control){
    //console.log((control.value.trim().length != 0) );
    if(!((control.value.trim().length === 0) || (control.value.trim().length != 9))){
      return null;
    }else{
      return {'id' : true};
    }
  }
}
