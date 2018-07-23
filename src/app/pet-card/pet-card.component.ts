import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      pet: this.pet
    };


    this.dialog.open(ProfileComponent, dialogConfig);
  }


}
