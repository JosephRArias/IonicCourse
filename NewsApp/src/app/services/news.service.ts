import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApiKey;
  private headlinePage = 0;
  private actualCategory = '';
  private categoryPage = 0;
  private newsUrl: string = `http://newsapi.org/v2`;

  constructor(private httpClient: HttpClient) {

  }
  getTopHeadlines() {
    this.headlinePage++;
    return this.httpClient.get<News>(`${this.newsUrl}/top-headlines?country=us&category=business&apiKey=${this.apiKey}&page=${this.headlinePage}`);
  }
  getTopHeadlinesByCategory(category: string) {
    if (this.actualCategory === category) {
      this.categoryPage++;
    } else {
      this.categoryPage = 1;
      this.actualCategory = category;
    }
    return this.httpClient.get<News>(`${this.newsUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}&page=${this.categoryPage}`);
  }
}