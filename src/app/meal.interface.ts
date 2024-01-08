// Defining an interface named 'Meal' to represent the structure of meal objects
export interface Meal {
    // Unique identifier for the meal
    idMeal: string;

    // Name of the meal
    strMeal: string;

    // Category to which the meal belongs
    strCategory: string;

    // Area or region associated with the meal
    strArea: string;

    // Instructions on how to prepare the meal
    strInstructions: string;

    // URL or path to the thumbnail image of the meal
    strMealThumb: string;
}
