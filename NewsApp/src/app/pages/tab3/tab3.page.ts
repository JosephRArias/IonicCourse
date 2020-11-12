import { Component } from '@angular/core';
import { SaveDataService } from 'src/app/services/save-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public dataService: SaveDataService) { }

}
