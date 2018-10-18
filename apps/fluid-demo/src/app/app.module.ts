import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './expansion-panel/basic.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FluidModule } from '@fluid-monorepo/fluid';

const AppRoutes: Routes = [
  {
    path: 'expansion-panel',
    component: BasicComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FluidModule,
    NxModule.forRoot(),
    // RouterModule.forRoot(AppRoutes)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
