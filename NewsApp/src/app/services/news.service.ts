import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApiKey;
  private newsUrl: string = `http://newsapi.org/v2`;

  constructor(private httpClient: HttpClient) {

  }
  getTopHeadlines() {
    return this.httpClient.get<News>(`${this.newsUrl}/top-headlines?country=us&category=business&apiKey=${this.apiKey}`);
  }
  getTopHeadlinesByCategory(category: string) {
    return this.httpClient.get<News>(`${this.newsUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`);
  }
}