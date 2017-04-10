import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { PopupComponent } from './popup.component';
import { ImageDirective } from './image.directive'; 
import { MediaItemService } from './media-item.service';
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    PopupComponent,
    ImageDirective,
    MediaItemFormComponent
  ],
  providers: [
    MediaItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}