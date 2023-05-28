import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionRefComponent } from './change-detection-ref/change-detection-ref.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ChangeDetectionRefComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[ChangeDetectionRefComponent],
  bootstrap:[ChangeDetectionRefComponent]
})
export class ChangeDetectionModule { }
