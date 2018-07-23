import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pets: any;
  zipCode = new FormControl('', [Validators.required]);

  constructor(private service: SearchService) { }

  ngOnInit() {
  }

  submitSearch() {
    console.log(this.zipCode.valid);
    console.log(this.zipCode);
    console.log(this.zipCode.getError);
    if (this.zipCode.valid) {
      this.zipLookup()
    }
}

  async zipLookup() {
    try {
      const response = await this.service.getPets(this.zipCode.value).toPromise();
      this.pets = response.petfinder.pets.pet;
    }
    catch (error) {
      console.log(error);
      this.zipCode.setErrors({"apiError": true});
      console.log(this.zipCode);
    }
  }

  openProfile() {
    console.log("called");
  }

}
