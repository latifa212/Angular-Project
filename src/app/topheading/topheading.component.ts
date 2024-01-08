import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})

export class TopheadingComponent implements OnInit {
  // Array to store random meal images
  randomMealImages: string[] = [];

  // Array to store meal names
  mealNames: string[] = [];

  // Constructor to inject the NewapiservicesService
  constructor(private _services: NewapiservicesService) {}

  // Lifecycle hook OnInit, executed when the component is initialized
  ngOnInit(): void {
    // Fetching random meal images from the service and subscribing to the observable
    this._services.getRandomMealImages(5).subscribe((images: string[]) => {
      this.randomMealImages = images;
    });

    // Fetching random meal names from the service and subscribing to the observable
    this._services.getRandomMealImages(5).subscribe((names: string[]) => {
      this.mealNames = names;
    });
  }
}