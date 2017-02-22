import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Entreprises } from '../../../both/collections/entreprises.collection';
import { Entreprise } from '../../../both/models/entreprise.model';
import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  entreprises: Observable<Entreprise[]>;

  constructor() {
    this.entreprises = Entreprises.find({}).zone();
  }
}
