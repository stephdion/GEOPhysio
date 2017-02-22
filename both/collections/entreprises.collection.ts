import { MongoObservable } from 'meteor-rxjs';

import { Entreprise } from '../models/entreprise.model';

export const Entreprises = new MongoObservable.Collection<Entreprise>('entreprises');
