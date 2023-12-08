import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observables-page',
  templateUrl: './observables-page.component.html',
  styleUrls: ['./observables-page.component.css']
})
export class ObservablesPageComponent {

  constructor(private dataService: DataService) { }

  searchMealByName(name: string) {
    this.dataService.searchMealByName(name).subscribe((data: any) => {
      console.log(data);
    });
  }

}
