import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseFlowComponent } from './reverse-flow.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ReverseFlowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ReverseFlowComponent]
})
export class ReverseFlowModule { }
