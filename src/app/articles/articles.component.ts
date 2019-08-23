import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import {ArticlesListService} from '../service/articles-list.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  articleInput;
  constructor(private articlesListService: ArticlesListService) {
  }

  ngOnInit() {
      this.getArticles();
  }

  getArticles(): void {
      this.articlesListService.getListArticles()
        .subscribe(articles => this.articles = articles);
  }

  getObjectArticle(newArticle: string) {
         this.articleInput = this.articles.find(myObject => myObject.code === newArticle );
         if (this.articles.includes(this.articleInput)) {
            this.articlesListService.add(this.articleInput);
         }
         return this.articleInput;
  }
}
