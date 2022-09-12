import { IsNumber } from '../../shared/helpers/validators';
import { Component, Inject, Injector, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Required } from 'src/app/shared/helpers/validators';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddDonationComponent implements OnInit {
  @Input() donation: any;

  form: FormGroup;

  dialogRef = null;
  dialogData;
/*
  constructor(private injector: Injector) {
      this.dialogRef = this.injector.get(MatDialogRef, null);
      this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);

      @Inject(MAT_DIALOG_DATA) public data: any,
              public _dialogRef: MatDialogRef<AddDonationComponent>
  } */
  constructor(private formBuilder: FormBuilder,
              private injector: Injector) {
    this.dialogRef = this.injector.get(MatDialogRef, null);
    this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);
  }

  ngOnInit(): void {
    const init = this.dialogRef ? true : false;
    this.setForm(init);
  }

  save(): void {
    if (this.form.invalid) return;

    this.dialogRef ? this.dialogRef.close(this.form.value) : this.donation.expand = false;
  }

  reset(): void {
    this.setForm(true);
  }

  private setForm(init: boolean): void {
    console.log(this.donation);

    this.form = this.formBuilder.group({
      entityName: [ init ? '' : this.donation.entityName, [Required] ],
      donationAmount: [ init ? '' : this.donation.donationAmount, [Required, IsNumber]] ,
      entityType: [ init ? '' : this.donation.entityType , Required ],
      donationPurpose: [ init ? '' : this.donation.donationPurpose , Required ],
      donationConditions: [init ? '' : this.donation.donationConditions],
      currencyType: [init ? '' : this.donation.currencyType, Required],
      conversionRate: [init ? '' : this.donation.conversionRate, [Required, IsNumber]],
      expand: [init ? true : false]
      //  Validators.pattern('[(0-9)(a-z)(A-Z)]')
    });
  }
}
