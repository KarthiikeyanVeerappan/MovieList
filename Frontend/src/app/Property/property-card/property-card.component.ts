import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector:'app-property-card',
  //template: '<h1>I am a card</h1>'
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
})

export class PropertyCardComponent{
  @Input() property:any

  constructor(private router:Router){}


}


