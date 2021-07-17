import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotePublisher!:string
  quoteMessage!:string
  quoteAuthor!:string
  quoteDate!:number

  constructor() { }

  ngOnInit(): void {
  }

}
