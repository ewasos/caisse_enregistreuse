import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {ArticlesListService} from '../service/articles-list.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
    articles: Article[];
    totalTVA = 0;
    totalHT = 0;
    totalTTC = 0;
    constructor(public articlesListService: ArticlesListService) { }

    ngOnInit() {
      this.articlesListService.getTotalTTC()
        .subscribe((total) => {
          this.totalTTC = total;
        });
      this.articlesListService.getTotalHT()
        .subscribe((to) => {
          this.totalHT = to;
        });
      this.articlesListService.getTotalTVA()
        .subscribe((total) => {
          this.totalTVA = total;
        });
    }
}

