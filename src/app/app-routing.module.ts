import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadListComponent } from './read-list/read-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  { path: '', component: ReadListComponent},
  { path: 'watch', component: WatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
