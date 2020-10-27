import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  FechaNac: Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Cancelar',
        handler: (event) => {
          console.log(event);
        }
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
