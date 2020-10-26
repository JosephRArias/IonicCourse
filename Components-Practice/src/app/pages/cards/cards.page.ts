import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  favorite: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.favorite = !this.favorite;
  }
}
