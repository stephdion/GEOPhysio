import { Meteor } from 'meteor/meteor';

import { loadEntreprises } from './imports/fixtures/entreprises';

Meteor.startup(() => {
  loadEntreprises();
});
