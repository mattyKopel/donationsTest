import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() control: FormControl;
  @Input() name: string;
  @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
