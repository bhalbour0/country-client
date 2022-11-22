import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country';
/**
 * Country service.
 */
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {

   }

   /**
    * Get a country by a name.
    * @param name name of the country
    * @returns the country found
    */
   getCountryByName(name: string) {
    return this.httpClient.get<Country>(`http://localhost:8080/countries/ ${name}`);
  }

  /**
   * Get a list of countries.
   * @returns list of countries
   */
  getCountries() {
    return this.httpClient.get<any>("http://localhost:8080/countries/");
  }
}
