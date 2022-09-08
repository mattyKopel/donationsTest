import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlusMinusComponent implements OnInit {

  constructor() { }
  @Input() value: number = 0;
  @Input() lable: string;

  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  changeNumber(add: boolean): void {
    add && this.value++;
    !add && this.value > 0 && this.value--;
    this.updateValue.emit(this.value);
  }
}
