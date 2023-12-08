import {
  defineNamespace,
  defineProjections,
  Model as ТерминалMixin
} from '../mixins/regenerated/models/i-i-s-p-a-r-k-o-m-a-t-терминал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТерминалMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
