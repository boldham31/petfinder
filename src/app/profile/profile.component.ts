import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from './services/profile.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string
  pet: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ProfileComponent>,
    private service: ProfileService, 
    private activatedRoute: ActivatedRoute) 
    {
      this.pet = this.data.pet;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
  
      console.log(this.pet);
    })
  }
  close() {
    this.dialogRef.close();
}



  // async getPet() {
  //   try {
  //     const response = await this.service.getPetById(this.id).toPromise();
  //     this.pet = response.petfinder.pet;
  //     console.log(this.pet);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

}
