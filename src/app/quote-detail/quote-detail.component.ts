import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() todeleQuote = new EventEmitter<boolean>();

  deleteQuote(todele:boolean) {
    this.todeleQuote.emit(todele);
  }

  upvotes() {
    this.quote.upvotes = this.quote.upvotes +1;
  }

  downvotes(){
    this.quote.downvotes = this.quote.downvotes + 1;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
