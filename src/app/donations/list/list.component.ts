import { Donation } from './../../shared/models/donation';
import { AddDonationComponent } from './../add-donation/add-donation.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  listDonations = new FormArray([]);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newDonation(): void {
    const dialogConfig: MatDialogConfig = {
      width: '45vw',
      height: '50vh',
    };

    this.dialog.open(AddDonationComponent, dialogConfig).afterClosed().subscribe(data => {
      this.addDonation(data);
    });
  }

  addDonation(data: Donation): void {
    this.listDonations.push(new FormControl(data));
  }
}
