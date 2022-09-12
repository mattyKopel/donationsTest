import { DonationsRoutingModule } from './donations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { DonationComponent } from './donation/donation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const components = [
  ListComponent,
  AddDonationComponent,
  DonationComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    SharedModule,
    DonationsRoutingModule
  ]
})
export class FilesModule { }
