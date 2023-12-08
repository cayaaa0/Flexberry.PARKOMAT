import {
  defineNamespace,
  defineProjections,
  Model as ПаркМестоMixin
} from '../mixins/regenerated/models/i-i-s-p-a-r-k-o-m-a-t-парк-место';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПаркМестоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
