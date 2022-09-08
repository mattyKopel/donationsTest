import { IsNumber } from './../../shared/helpers/validators';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Required } from 'src/app/shared/helpers/validators';
import { FileType } from 'src/app/shared/enum/fileType.enum';
import { SizeType } from 'src/app/shared/enum/sizeType.enum';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddFileComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _dialogRef: MatDialogRef<AddFileComponent>) { }

  ngOnInit(): void {
    this.setForm();
  }

  save(): void {
    if (this.form.invalid) return;

    this._dialogRef.close(this.form.value);
  }

  reset(): void {
    this.setForm();
  }

  private setForm(): void {
    this.form = this.formBuilder.group({
      fileID: [ '', [Required, IsNumber] ],
      fileName: [ '', Required] ,
      fileType: [ null , Required ],
      // fileType: [ FileType.DOCX , Required ],
      fileSize: this.formBuilder.group({
          size: [ null, [Required, IsNumber] ],
          sizeType: [ ]
          // sizeType: [ SizeType.G ]
        }),
      owner: [],
      createdAt: [],
      encoded: []
    });
  }
}
