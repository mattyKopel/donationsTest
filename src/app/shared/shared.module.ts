import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatDialogModule,
];

const components = [
  BasicInputComponent,
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
