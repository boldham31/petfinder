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

  async submitSearch() {
    try {
      const response = await this.service.getPets(this.zipCode.value).toPromise();
      console.log(response);
      this.pets = response.petfinder.pets.pet;
      console.log(this.pets);
  }
  catch (error) {
    console.log(error);
  }
}

}
