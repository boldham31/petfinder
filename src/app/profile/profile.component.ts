import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string
  pet: any;
  constructor(private service: ProfileService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getPet();
    })
  }

  async getPet() {
    try {
      const response = await this.service.getPetById(this.id).toPromise();
      console.log(response);
      this.pet = response.petfinder.pet;
      console.log(this.pet);
    }
    catch (error) {
      console.log(error);
    }
  }

}
