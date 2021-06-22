import { Component, Input, OnInit } from '@angular/core';
import { ICardProp } from '../app.component';

const initialPropState:ICardProp = {
  imageUrl: "",
  content: "",
  title: "",
  username: ""
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  prop: ICardProp = initialPropState;
  constructor() {  
   }
  ngOnInit(): void {
  }

}
