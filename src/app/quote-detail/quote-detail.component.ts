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
  @Output() countUpvotes = new EventEmitter<boolean>();
  @Output() countDownvotes = new EventEmitter<boolean>();

  deleteQuote(todele:boolean) {
    this.todeleQuote.emit(todele);
  }

  upVotes(tocount:boolean) {
    this.countUpvotes.emit(tocount);
  }

  downVotes(todiscount:boolean){
    this.countDownvotes.emit(todiscount);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
