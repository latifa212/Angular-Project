import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

    constructor(private httpClient: HttpClient) { }

    searchMealByName(name: string): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}search.php?s=${name}`);
    }

    getAllMeals(): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}list.php?c=list`);
    }
}
