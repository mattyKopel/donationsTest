import { PlusMinusComponent } from './components/plus-minus/plus-minus.component';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './components/radio/radio.component';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatDialogModule,
];

const components = [
  BasicInputComponent,
  PlusMinusComponent,
  RadioComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules
  ],
  exports: [
    modules,
    components,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
 }
