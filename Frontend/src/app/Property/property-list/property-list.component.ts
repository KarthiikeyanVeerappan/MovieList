import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertyList:Array<any>=[
    {​​​​​"movieid":101, "moviename":"Roohi", "productionname":"Jio Studios","movieType":"Horror - Comedy", "director":"Hardik Mehta", "cast1":"Rajkumar Rao", "cast2":"Jahnvi Kapoor","language":"Hindi","poster":"assets/images/Roohi.jpg"}​​​​​,
    {​​​​​"movieid":102, "moviename":"Mumbai Saga", "productionname":"T-Series","movieType":"Action", "director":"Sanjay Gupta", "cast1":"John Abraham", "cast2":"Kajal Aggarwal","language":"Hindi","poster":"assets/images/mumbai-saga.jpg"}​​​​​,
    {​​​​​"movieid":201, "moviename":"Krack", "productionname":"Saraswathi film Divison","movieType":"Action", "director":"Gopichand", "cast1":"Ravi Teja", "cast2":"Shruti Haasan","language":"Telugu","poster":"assets/images/Krack.jpg"}​​​​​,
    {​​​​​"movieid":202, "moviename":"Uppena", "productionname":"Mythiri Movie Makers","movieType":"Romance", "director":"Bucci Babu", "cast1":"Panja Vaishnav Tej", "cast2":"Kriti Shetty","language":"Telugu","poster":"assets/images/Uppena.jpg"}​​​​​
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
