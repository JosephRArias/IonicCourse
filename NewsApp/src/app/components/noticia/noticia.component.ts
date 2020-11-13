import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, IonCard } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SaveDataService } from 'src/app/services/save-data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('2000ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class NoticiaComponent implements OnInit {
  @Input() article: Article;
  @Input() inFavouritesScreen;
  favouriteButton: any;
  constructor(private IAB: InAppBrowser, private ActionSheetCrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataService: SaveDataService, ) { }

  ngOnInit() { }

  openArticle() {
    const browser = this.IAB.create(this.article.url, '_system');
  }
  showOptions() {
    if (this.inFavouritesScreen) {
      this.favouriteButton = {
        text: 'Remove from Saved',
        icon: 'trash',
        handler: () => {
          this.dataService.deleteArticle(this.article);
        }
      }
    } else {
      this.favouriteButton = {
        text: 'Save',
        icon: 'bookmark',
        handler: () => {
          this.dataService.saveArticle(this.article);
        }
      }
    }
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.ActionSheetCrl.create({
      header: 'Actions',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          this.socialSharing.share(this.article.title,
            this.article.source.name,
            '',
            this.article.url);
        }
      }, this.favouriteButton, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
}
