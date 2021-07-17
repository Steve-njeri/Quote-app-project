import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Educational quote","Be strong in christ","Stephen","Joy Kim", 0,0, new Date(7,17,2021)),
    new Quote("Friendship Quote","Friendship is the only cement that will ever hold the world together.","Woodrow T. Wilson", "ken joe",0,0, new Date(2019, 4, 11))
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
