import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ProfileService {

  constructor(private http: HttpClient) {}

   getPetById (id: string) {
      return this.http.jsonp<any>('http://api.petfinder.com/pet.get?key=2c55d27174ebf5bdef83f1176bd7ca38&id=' + id + '&format=json', 'callback');
   }
}
