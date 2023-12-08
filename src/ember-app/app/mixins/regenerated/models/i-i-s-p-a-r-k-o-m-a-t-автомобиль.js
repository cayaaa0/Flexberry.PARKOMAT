import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госНомер: DS.attr('string'),
  водитель: DS.belongsTo('i-i-s-p-a-r-k-o-m-a-t-водитель', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-p-a-r-k-o-m-a-t-услуга', { inverse: 'автомобиль', async: false })
});

export let ValidationRules = {
  госНомер: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-автомобиль.validations.госНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  водитель: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-автомобиль.validations.водитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-автомобиль.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвтомобильE', 'i-i-s-p-a-r-k-o-m-a-t-автомобиль', {
    госНомер: attr('Гос номер', { index: 0 }),
    водитель: belongsTo('i-i-s-p-a-r-k-o-m-a-t-водитель', 'Водитель', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });
};
