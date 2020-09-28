import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'The blaze', 'full episode on ktn', new Date(2020, 3, 14)),
    new Quote(2, 'Nikiminaj ft Tekashix69', 'TROLLZ', new Date(2020, 6, 9)),
    new Quote(3, 'JUSTIN BIBER FT DJ KHALID', 'NO BRAINER', new Date(2018, 1, 12)),
    new Quote(4, 'MILEY CYRUS', 'CANT STOP', new Date(2019, 0, 18)),
    new Quote(5, 'Solve math homework', 'Damn Math', new Date(2019, 2, 14)),
    new Quote(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2030, 3, 14)),
  ]
   toggleDetails(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
   completeQuote(isComplete, index){
     if (isComplete) {
       this.quotes.splice(index,1);
     }
   }
  constructor() { }

  ngOnInit() {
  }

}
