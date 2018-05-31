import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule  } from '@angular/common/http';

@Injectable()

export class SearchService {

  constructor(private http: HttpClient) { }

  getSomething() {
    return this.http.jsonp<any>('http://api.petfinder.com/pet.find?key=2c55d27174ebf5bdef83f1176bd7ca38&location=78704&format=json', 'callback');
}
}