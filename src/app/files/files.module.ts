import { FilesRoutingModule } from './files-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddFileComponent } from './add-file/add-file.component';
import { FileComponent } from './file/file.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const components = [
  ListComponent,
  AddFileComponent,
  FileComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    SharedModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }
