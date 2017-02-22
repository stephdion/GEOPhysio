import { Entreprises } from '../../../both/collections/entreprises.collection';
import { Entreprise } from '../../../both/models/entreprise.model';

export function loadEntreprises() {
  if (Entreprises.find().cursor.count() === 0) {
    const entreprises: Entreprise[] = [{
      nom: 'Ma cie',
      description: 'Can we please just for an evening not listen to dubstep.',
      territoire: 'Palo Alto'
    }];

    entreprises.forEach((entreprise: Entreprise) => Entreprises.insert(entreprise));
  }
}
