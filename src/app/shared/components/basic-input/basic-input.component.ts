import { Required } from './../../helpers/validators';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() label: string;
  @Input() type: string = 'text';
  @Input() control: FormControl = new FormControl('');
  @Input() placeholder: string;
  @Input() isSelect?: boolean;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() narrow?: boolean;

  @Output() enter: EventEmitter<void> = new EventEmitter();
  @Output() focusout: EventEmitter<void> = new EventEmitter();

  @ViewChild('inputRef') inputRef!: ElementRef;

  focusInput: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isSelect && this.inputRef.nativeElement.select();
  }

  ngOnChanges(): void {
    this.isSelect && setTimeout(_ => this.inputRef?.nativeElement?.select(), 0);
  }
}
