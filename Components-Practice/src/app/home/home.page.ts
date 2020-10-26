import { Component } from '@angular/core';
import { Components } from '../components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'About',
      redirectTo: '/about'
    },
    {
      icon: 'person-circle-outline',
      name: 'Profile',
      redirectTo: '/profile'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'book-outline',
      name: 'Card',
      redirectTo: '/cards'
    }
  ];

  constructor() { }

}
