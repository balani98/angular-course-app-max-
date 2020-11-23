import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  ngOnInit(){

  }
  numbers:Array<Number>= [1,2,3,4,5,6,7,8,9,10];
  title = 'recipe-shopping';
  loadedFeature = 'recipe';
  switchValue :number = 2;
  onNavigate(feature:string){
     this.loadedFeature = feature;
     }
}
