import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddFileComponent } from '../add-file/add-file.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newFile(): void {
    const dialogConfig: MatDialogConfig = {
      width: '55vw',
      height: '60vh',
    };

    this.dialog.open(AddFileComponent, dialogConfig).afterClosed().subscribe(data => {
      this.addFile();
    });
  }
  addFile(): void {
  }
}
