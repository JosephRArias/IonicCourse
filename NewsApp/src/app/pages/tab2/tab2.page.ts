import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  filteredArticles = [];
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  @ViewChild(IonSegment, { static: true }) ionSegment: IonSegment;
  @ViewChild(IonInfiniteScroll, { static: true }) ionInfinite: IonInfiniteScroll;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.ionSegment.value = this.categories[0];
    this.loadArticles(this.ionSegment.value);
  }

  segmentChanged() {
    this.filteredArticles = [];
    this.ionInfinite.disabled = false;
    this.loadArticles(this.ionSegment.value);
  }
  loadArticles(category: string, event?) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(res => {
      this.filteredArticles.push(...res.articles);
      if (event) {
        event.target.complete();
      }
      if (res.articles.length == 0) {
        event.target.disabled = true;
        return;
      }
    });
  }
  loadData(event) {
    this.loadArticles(this.ionSegment.value, event);
  }
}
