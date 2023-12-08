import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  стоимость: DS.attr('decimal'),
  паркМесто: DS.belongsTo('i-i-s-p-a-r-k-o-m-a-t-парк-место', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-p-a-r-k-o-m-a-t-услуга', { inverse: null, async: false }),
  паркомат: DS.belongsTo('i-i-s-p-a-r-k-o-m-a-t-паркомат', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  стоимость: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-запись.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  паркМесто: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-запись.validations.паркМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-запись.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-запись.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-p-a-r-k-o-m-a-t-запись', {
    стоимость: attr('Стоимость', { index: 0 }),
    паркМесто: belongsTo('i-i-s-p-a-r-k-o-m-a-t-парк-место', 'Парк место', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    услуга: belongsTo('i-i-s-p-a-r-k-o-m-a-t-услуга', 'Услуга', {
      длительность: attr('Длительность', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'длительность' })
  });
};
