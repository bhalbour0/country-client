import { Component, OnInit } from '@angular/core';
import { Country } from './model/country';
import { CountryList } from './model/countryList';
import { CountryService } from './service/country.service';
/**
 * Main component of the country web application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CountryApp';

  country!: Country;
  countries!: Country[];
  countryName!: string;

  constructor(private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.showCountries();
  }

  /**
   * Show list of countries
   */
  showCountries() {
    this.countryService.getCountries()
      .subscribe((data: CountryList) => {
        this.countries = data.countries;
      })
  }

  /**
   * When search button is pressed
   * @param name name of the country wrote in the input text
   */
  onClickSearch(name: string){
    this.countryService.getCountryByName(name).subscribe((country: Country) => {
      this.country = country;
    });
  }
  
}
