import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model'; //Non cancellare gli altri import

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'card mt-4';

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp(): Boolean {
    this.article.voteUp(); //Modificato qui 
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown(); //Modificato qui
    return false;
  }

  ngOnInit() {}

  
}