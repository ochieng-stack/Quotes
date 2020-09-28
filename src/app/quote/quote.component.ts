import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'SLEEPY HALLOW SEASON 1', 'FULL EPISODE EVERY THURSDAY', new Date(2020, 3, 14)),
    new Quote(2, 'NIKIMINAJ ft TEKASHI69', 'TROLLZ', new Date(2020, 6, 9)),
    new Quote(3, 'GREYS ANATOMY SEASON 11', 'PRIMEAR FOX TV', new Date(2018, 1, 12)),
    new Quote(4, 'IMMPOSTER SEASON 2', 'PRIMEAR FOX TV', new Date(2019, 0, 18)),
    new Quote(5, 'CROWN LAKE SEASON 2', 'PRIMEAR BRAT TV', new Date(2019, 2, 14)),
    new Quote(6, 'LOCKE AND KEY SEASON 1', 'PREMIAR FOX TV', new Date(2030, 3, 14)),
  ]
   toggleDetails(index){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index,1)
      }
    }
  }
   completeQuote(isComplete, index){
     if (isComplete) {
       this.quotes.splice(index,1);
     }
   }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
