import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВодительMixin
} from '../mixins/regenerated/models/i-i-s-p-a-r-k-o-m-a-t-водитель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВодительMixin, Validations, {
});

defineProjections(Model);

export default Model;
