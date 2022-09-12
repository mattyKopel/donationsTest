import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, Output, SimpleChanges, ViewEncapsulation, EventEmitter } from '@angular/core';
import { find, isObject, mapValues } from 'lodash-es';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DonationComponent implements OnInit {

  @Input() donation: any;

  @Output() expand: EventEmitter<void> = new EventEmitter();

  donationForm = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.donation = {
      entityName: 'שוויץ',
      donationAmount: 200,
      entityType: 'מדינה',
      donationPurpose: 'חינוך',
      donationConditions: 'כלל עולמי',
      currencyType: 'ש"ח',
      conversionRate: '1',
      expand: false
    };

    this.donationForm = this.formBuilder.group({
      entityName: this.donation.entityName,
      donationAmount: this.donation.donationAmount,
      entityType: this.donation.entityType,
      donationPurpose: this.donation.donationPurpose,
      donationConditions: this.donation.donationConditions,
      currencyType: this.donation.currencyType,
      conversionRate: this.donation.conversionRate,
      expand: false
    });
  }
}

