import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import {ArticlesListService} from '../service/articles-list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() addArticle: Article;
  articles: Article[];
  constructor(public articlesListService: ArticlesListService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesListService.getListArticlesAdded()
      .subscribe(articles => this.articles = articles);
  }
}
