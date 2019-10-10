import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    name: 'Luqman',
    city: 'DG Khan',
    interests: ['cricket', 'gaming', 'study']
  };

  constructor() {}

}
