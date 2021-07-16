import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("MLK", "Martin Luther King", "Injustice anywhere is a threat to justice everywhere."),
    new Quote("Life", "Margeret Atwood", "In the end we all become stories ")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
