import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/article';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  favoriteNews: Article[] = [];
  constructor(private storage: Storage,
    private toastCtrl: ToastController) { }

  saveArticle(article: Article) {
    const exists = this.favoriteNews.find(art => art.title === article.title);
    if (exists) {
      alert('Noticia ya existe');
    } else {
      this.favoriteNews.unshift(article);
    }
    this.storage.set('favourites', this.favoriteNews);
    this.presentToast('Article has been saved');
  }
  deleteArticle(article: Article) {
    this.favoriteNews = this.favoriteNews.filter(art => art.title !== article.title);
    this.storage.set('favourites', this.favoriteNews);
    this.presentToast('Article has been deleted');
  }
  async loadFavorites() {
    const favourites = await this.storage.get('favourites');
    if (favourites) {
      this.favoriteNews = favourites;
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    toast.present();
  }
}
