import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  constructor(private dataService: DataService) { }

  allMeals: any;

  ngOnInit(): void {
    this.dataService.getAllMeals().subscribe((data: any) => {
      console.log(data)
      this.allMeals = data.meals;
    });
  }


  

}
