import { Component } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css']
})

export class AllMealsComponent {

  lettersToDisplay: string[] = [];
  // Array to hold letters for display

  topheadingDisplay: any[] = [];
  // Array to store meal data for display

  noMealsFound: boolean = false;
  // Boolean flag to indicate whether meals are found

  constructor(private _services: NewapiservicesService) {}

  ngOnInit(): void {
    // Initialize component on page load
    this._services.getAlphabet().subscribe((data: string[]) => {
      // Subscribe to the alphabet data from the service
      this.lettersToDisplay = data;
      // Assign alphabet data to lettersToDisplay array
    });
  }

  getMealsByLetter(letter: string) {
    // Method to get meals based on selected letter
    this._services.getMealsByLetter(letter).subscribe((result: any) => {
      // Subscribe to the service to get meals by letter
      console.log(result);
      // Log the result for debugging purposes
      this.topheadingDisplay = result.meals;
      // Assign meal data to topheadingDisplay array
    });
  }

}