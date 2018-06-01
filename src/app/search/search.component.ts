import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pets: any;
  constructor(private service: SearchService) { }

  ngOnInit() {
  }

  async submitSearch() {
    try {
      const response = await this.service.getSomething().toPromise();
      console.log(response);
      this.pets = response.petfinder.pets.pet;
      console.log(this.pets);
  }
  catch (error) {
    console.log(error);
  }
}

}
