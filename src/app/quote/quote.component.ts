import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Be strong in christ","Stephen","Joy Kim", 0,0, new Date(7,17,2021)),
    new Quote("Be strong in christ","Stephen","Joy Kim", 0,0, new Date(7,17,2021)),
    new Quote("Be strong in christ","Stephen","Joy Kim", 0,0, new Date(7,17,2021)),
    new Quote("Friendship is the only cement that will ever hold the world together.","Woodrow T. Wilson", "ken joe",0,0, new Date(4, 11, 2019))
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  showDetails(index:number){
    this.quotes[index].showFullDetails = !this.quotes[index].showFullDetails;
  }

  deleSpecQuote(noti:boolean, index:number){
    if(noti){
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
