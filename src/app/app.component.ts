import { Component, OnInit } from '@angular/core';
import { Country } from './model/country';
import { CountryList } from './model/countryList';
import { CountryService } from './service/country.service';

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


  showCountries() {
    this.countryService.getCountries()
      .subscribe((data: CountryList) => {
        this.countries = data.countries;
      })
  }

  onClickSearch(name: string){
    this.countryService.getCountryByName(name).subscribe((country: Country) => {
      this.country = country;
    });
  }
  
}
