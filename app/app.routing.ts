import { Routes, RouterModule } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: 'list', component: MediaItemListComponent },
   { path: '', pathMatch: 'full', redirectTo: 'list' }
];

export const routing = RouterModule.forRoot(appRoutes);