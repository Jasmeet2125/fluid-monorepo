import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicComponent } from './expansion-panel/basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const AppRoutes: Routes = [
  {
    path: 'expansion-panel',
    component: BasicComponent
  },
  { path: '',   redirectTo: '/expansion-panel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
