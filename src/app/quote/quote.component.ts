import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write.","Rainer Maria Rilke","Joy Kim", 0,0, new Date(2020,3,14)),
    new Quote("You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.","Annie Proulx","Stephen", 0,0, new Date(2022,1,12)),
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

  clickUp(up:boolean, index:number) {
    if(up) {
      this.quotes[index].upvotes++;
    }
    
  }

  clickDown(down:boolean, index:number) {
    if(down) {
      this.quotes[index].downvotes++;
    }
    
  }

  delQuote(i) {
    this.quotes.splice(i, 1)
  }

  preNum:number
  lastNum:number
  counter:number

  highestUpvote() {
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }

    return  this.preNum
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
