import { Component } from '@angular/core';
import { locataires } from '../locataire';

@Component({
  selector: 'app-tab-list',
  templateUrl: 'tab-list.page.html',
  styleUrls: ['tab-list.page.scss']
})
export class TabListPage {
  locataires = [...locataires];
  constructor() {}

}
