import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ReverseFlowModule } from './reverse-flow/reverse-flow.module';
import { MaterialModule } from './material.module';
import { ReverseFlowComponent } from './reverse-flow/reverse-flow.component';

const routes: Routes = [
  { path: '', redirectTo: '/reverse-flow', pathMatch: 'full' },
  // { path: 'traditiona;', component: DashboardComponent },
  { path: 'reverse-flow', component: ReverseFlowComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReverseFlowModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
    MaterialModule
  ]
})
export class AppModule { }
