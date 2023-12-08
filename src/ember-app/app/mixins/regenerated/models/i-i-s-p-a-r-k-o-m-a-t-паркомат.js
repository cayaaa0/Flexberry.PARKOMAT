import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОкон: DS.attr('string'),
  времяОплаты: DS.attr('string'),
  датаОкон: DS.attr('date'),
  датаОплаты: DS.attr('date'),
  номерПарк: DS.attr('number'),
  статОпл: DS.attr('i-i-s-p-a-r-k-o-m-a-t-оплата'),
  терминал: DS.belongsTo('i-i-s-p-a-r-k-o-m-a-t-терминал', { inverse: null, async: false }),
  запись: DS.hasMany('i-i-s-p-a-r-k-o-m-a-t-запись', { inverse: 'паркомат', async: false })
});

export let ValidationRules = {
  времяОкон: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.времяОкон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяОплаты: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.времяОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаОкон: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.датаОкон.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОплаты: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерПарк: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.номерПарк.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статОпл: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.статОпл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-p-a-r-k-o-m-a-t-паркомат.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаркоматE', 'i-i-s-p-a-r-k-o-m-a-t-паркомат', {
    номерПарк: attr('Номер паркомата', { index: 0 }),
    времяОплаты: attr('Время оплаты', { index: 1 }),
    датаОплаты: attr('Дата оплаты', { index: 2 }),
    статОпл: attr('Статус оплаты', { index: 3 }),
    времяОкон: attr('Время окончания', { index: 4 }),
    датаОкон: attr('Дата окончания', { index: 5 }),
    терминал: belongsTo('i-i-s-p-a-r-k-o-m-a-t-терминал', 'Терминал', {
      номерТер: attr('Номер терминала', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'номерТер' }),
    запись: hasMany('i-i-s-p-a-r-k-o-m-a-t-запись', 'Запись', {
      стоимость: attr('Стоимость', { index: 0 }),
      паркМесто: belongsTo('i-i-s-p-a-r-k-o-m-a-t-парк-место', 'Парк место', {
        номер: attr('Номер', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'номер' }),
      услуга: belongsTo('i-i-s-p-a-r-k-o-m-a-t-услуга', 'Услуга', {
        длительность: attr('Длительность', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'длительность' })
    })
  });

  modelClass.defineProjection('ПаркоматL', 'i-i-s-p-a-r-k-o-m-a-t-паркомат', {
    номерПарк: attr('Номер паркомата', { index: 0 }),
    времяОплаты: attr('Время оплаты', { index: 1 }),
    датаОплаты: attr('Дата оплаты', { index: 2 }),
    статОпл: attr('Статус оплаты', { index: 3 }),
    времяОкон: attr('Время окончания', { index: 4 }),
    датаОкон: attr('Дата окончания', { index: 5 }),
    терминал: belongsTo('i-i-s-p-a-r-k-o-m-a-t-терминал', 'Номер терминала', {
      номерТер: attr('Номер терминала', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
