import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, range, map, toArray, tap, forkJoin } from 'rxjs';
import { Meal } from '../meal.interface';

@Injectable({
  providedIn: 'root'
})
export class NewapiservicesService {
  // Define base URLs for different API endpoints
  private readonly BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
  private readonly SEARCH_URL = `${this.BASE_URL}/search.php`;
  private readonly LOOKUP_URL = `${this.BASE_URL}/lookup.php`;

  // Known meal IDs for random selection
  private readonly knownMealIds = [52772, 52857, 52904, 52928, 52929, 52930, 52931, 52932, 52933, 52934, 52935, 52936, 52937, 52938, 52939, 52940, 52941, 52942, 52943, 52944, 52945, 52946, 52947, 52948, 52949, 52950, 52951, 52952, 52953, 52954, 52955, 52956, 52957, 52958, 52959, 52960, 52961, 52962, 52963, 52964, 52965, 52966, 52967, 52968, 52969, 52970, 52971, 52972, 52973, 52974, 52975, 52976, 52977, 52978, 52979, 52980, 52981, 52982, 52983, 52984, 52985, 52986, 52987, 52988, 52989, 52990, 52991, 52992, 52993, 52994, 52995, 52996, 52997, 52998, 52999, 53000, 53001, 53002, 53003, 53004, 53005, 53006, 53007, 53008, 53009, 53010, 53011, 53012, 53013, 53014, 53015, 53016, 53017, 53018, 53019, 53020, 53021, 53022, 53023, 53024, 53025, 53026, 53027, 53028, 53029, 53030, 53031, 53032, 53033, 53034, 53035, 53036, 53037, 53038, 53039, 53040, 53041, 53042, 53043, 53044, 53045, 53046, 53047, 53048, 53049, 53050, 53051, 53052, 53053,];

  constructor(private _http:HttpClient) { }

  // Fetch meals based on a search term
  getMealsBySearch(searchTerm: string): Observable<any[]> {
    const url = `${this.SEARCH_URL}?s=${searchTerm}`;
    return this._http.get<Meal[]>(url);
  }

  // Fetch meals based on the first letter
  getMealsByLetter(letter: string): Observable<any> {
    const url = `${this.SEARCH_URL}?f=${letter}`;
    return this._http.get(url);
  }

  // Get the alphabet as an observable
  getAlphabet(): Observable<string[]> {
    return range(65, 26).pipe(
      map(data => String.fromCharCode(data)),
      toArray()
    );
  }

  // Fetch random meal images
  getRandomMealImages(count: number): Observable<string[]> {
    const randomIds = Array.from({ length: count }, () => {
      return this.knownMealIds[Math.floor(Math.random() * this.knownMealIds.length)];
    });

    // Generate URLs for random meal lookup
    const randomUrls = randomIds.map((id) => `${this.LOOKUP_URL}?i=${id}`);

    console.log('Random URLs:', randomUrls);

    // Fetch meal details for each random URL
    return forkJoin(randomUrls.map((url) => this._http.get(url).pipe(
      map((result: any) => (result.meals && result.meals.length > 0) ? result.meals[0].strMealThumb : 'URL_PAR_DEFAUT')
    )));
  }

  // Fetch details of a specific meal by ID
  getMealDetails(mealId: string): Observable<any> {
    const detailsUrl = `${this.LOOKUP_URL}?i=${mealId}`;
    return this._http.get(detailsUrl);
  }
}