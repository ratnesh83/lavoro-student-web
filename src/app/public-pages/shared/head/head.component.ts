import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialog } from '../../popups/login/login.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {    
  }

    
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
