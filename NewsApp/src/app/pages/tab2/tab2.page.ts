import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  constructor(private newsService: NewsService) { }

  segmentChanged(event) {
    console.log(event.target.value);
    this.newsService.getTopHeadlinesByCategory(event.target.value).subscribe(res => {
      console.log(res.articles);
    });
  }
}
