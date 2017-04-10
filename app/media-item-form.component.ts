import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(private mediaItemService : MediaItemService) {}

  ngOnInit() {
    this.form = new FormGroup({
      studentid: new FormControl(''),
      medium: new FormControl('Male'),
      name: new FormControl(''),
      category: new FormControl('Application Development'),
      year: new FormControl(''),
      quotes: new FormControl('')
    });
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
    //console.log(mediaItem);
  }
}
