import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueObj: any;
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       * making a http request to the edamam API which returns an object that is set to recipeList
       */
      this._http.get('https://api.edamam.com/search?q=' + this.recipeValue + '&app_id=e45cb624&app_key=' +
        '64371676a93a1d7592e430e49416f61b&from=0&to=3&calories=591-722&health=alcohol-free')
        .subscribe(result => {
         this.recipeList = result['hits'];

         console.log(this.recipeList);
         // console.log(result);
      },
        error => {
        });
    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null
      && this.recipeValue !== '') {
      /**
       * Write code to get place
       */
      // makes a get request to the fourcsquare api to obtain venues
      this._http.get('https://api.foursquare.com/v2/venues/explore?client_id=BEE0L2ML3IOU2T5131AMGHMEUQMF4ZUIZIYPELBDBV25X0E1&client_secret=' +
        'AKX3KX2QIZFQCNAUMGACWOHGEHA5W0QWM3O5NXKQ2H0SAHXD&v=20180323&limit=10&near=' + this.placeValue + '&query=' + this.recipeValue +  '')
        .subscribe(result => {
             this.venueObj = result['response'];
          // logging results on console
            console.log(this.venueObj);
            console.log(result);
          },
          error => {
          });
        }
  }
}
