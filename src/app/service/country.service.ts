import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {

   }

   getCountryByName(name: string) {
    return this.httpClient.get<Country>(`http://localhost:8080/countries/ ${name}`);
  }

  getCountries() {
    return this.httpClient.get<any>("http://localhost:8080/countries/");
  }
}
