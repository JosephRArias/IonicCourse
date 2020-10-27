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
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Calendar',
      redirectTo: '/date-time'
    },
    {
      icon: 'chevron-forward-circle-outline',
      name: 'Fab Buttons',
      redirectTo: '/fab'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    }
  ];

  constructor() { }

}
