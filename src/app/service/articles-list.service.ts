import { Injectable, Input } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../articles-mock';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesListService {
  private sommeTTC = new Subject<number>();
  private sommeHT = new Subject<number>();
  private sommeTVA = new Subject<number>();
  listArticlesAdded: Article[] = [];
  constructor() { }
  getListArticlesAdded(): Observable<Article[]> {
      return of (this.listArticlesAdded);
  }
  getListArticles(): Observable<Article[]> {
      return of (ARTICLES);
  }
  add(article: Article) {
      this.listArticlesAdded.push(article);
      this.calculeSommeTotal();
      this.calculeSommeHT();
      this.calculeSommeTVA();
  }
  /* calculs des sommes */
  calculeSommeTotal() {
    this.sommeTTC.next(this.listArticlesAdded.reduce((a, item) => a + item.price, 0));
  }
  calculeSommeHT() {
    this.sommeHT.next((this.listArticlesAdded.reduce((a, item) => a + item.price, 0)) / 1.2 );
  }
  calculeSommeTVA() {
    this.sommeTVA.next( (this.listArticlesAdded.reduce((a, item) => a + item.price, 0)) - ((this.listArticlesAdded.reduce((a, item) => a + item.price, 0)) / 1.2));
  }
 /* getters des sommes */
  getTotalTTC() {
    return this.sommeTTC;
  }
  getTotalHT() {
    return this.sommeHT;
  }
  getTotalTVA() {
    return this.sommeTVA;
  }
}
