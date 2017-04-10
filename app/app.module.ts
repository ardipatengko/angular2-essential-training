import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { PopupComponent } from './popup.component';
import { FavoriteDirective } from './favorite.directive';
import { ImageDirective } from './image.directive'; 
import { MediaItemService } from './media-item.service';
import { MediaItemFormComponent } from './media-item-form.component';
import { sexListToken, sexList } from './providers';
import { expertiseListToken, expertiseList } from './providers';
import { StudentIdConvertingListPipe } from './student-id-converting.pipe';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    PopupComponent,
    ImageDirective,
    MediaItemFormComponent,
    StudentIdConvertingListPipe,
    FavoriteDirective
  ],
  providers: [
    MediaItemService,
    {provide: sexListToken, useValue: sexList},
    {provide: expertiseListToken, useValue: expertiseList},
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}