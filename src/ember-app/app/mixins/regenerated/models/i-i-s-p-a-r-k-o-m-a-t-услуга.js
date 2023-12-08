import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('string'),
  наименование: DS.attr('i-i-s-p-a-r-k-o-m-a-t-услуги'),
  номерУсл: DS.attr('number'),
  автомобиль: DS.hasMany('i-i-s-p-a-r-k-o-m-a-t-автомобиль', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерУсл: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-услуга.validations.номерУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  автомобиль: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-услуга.validations.автомобиль.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-p-a-r-k-o-m-a-t-услуга', {
    номерУсл: attr('Номер услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    автомобиль: hasMany('i-i-s-p-a-r-k-o-m-a-t-автомобиль', 'Автомобиль', {
      госНомер: attr('Гос номер', { index: 0 }),
      водитель: belongsTo('i-i-s-p-a-r-k-o-m-a-t-водитель', 'Водитель', {
        фИО: attr('ФИО', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-p-a-r-k-o-m-a-t-услуга', {
    номерУсл: attr('Номер услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    длительность: attr('Длительность', { index: 2 })
  });
};
