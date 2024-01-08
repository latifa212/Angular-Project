import { Component } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  mealDetails: any; // Holds details of the displayed meal
  ingredients: string[] = []; // Holds the list of ingredients
  quantities: string[] = []; // Holds the corresponding quantities

  constructor(
    private _services: NewapiservicesService, // Meal service for fetching details
    private route: ActivatedRoute // ActivatedRoute for getting route parameters
  ) {}

  ngOnInit(): void {
    // Get the meal ID from the route parameters
    const mealId = this.route.snapshot.paramMap.get('id');
    
    // Fetch details of the meal with the provided ID
    if (mealId !== null) {
      this._services.getMealDetails(mealId).subscribe((details: any) => {
        // Check if meal details are available
        if (details.meals && details.meals.length > 0) {
          // Assign meal details to the component property
          this.mealDetails = details.meals[0];

          // Extract ingredients and quantities up to 20 items
          for (let i = 1; i <= 20; i++) {
            const ingredient = this.mealDetails['strIngredient' + i];
            const quantity = this.mealDetails['strMeasure' + i];

            // Add ingredient to the list if available
            if (ingredient) {
              this.ingredients.push(ingredient);
            }

            // Add quantity to the list if available
            if (quantity) {
              this.quantities.push(quantity);
            }
          }
        }
      });
    }
  }
}