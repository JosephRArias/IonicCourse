import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  news: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe(res => {
      this.news.push(...res.articles);
    });
  }
  loadData(event) {
    this.loadArticles(event);
  }
  loadArticles(event?) {
    this.newsService.getTopHeadlines().subscribe(res => {
      this.news.push(...res.articles);
      if (event) {
        event.target.complete();
      }
      if (res.articles.length == 0) {
        event.target.disabled = true;
        return;
      }
    });
  }
}
