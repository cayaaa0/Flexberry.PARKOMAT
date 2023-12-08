import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPARKOMATВодительLForm from './forms/i-i-s-p-a-r-k-o-m-a-t-водитель-l';
import IISPARKOMATПаркМестоLForm from './forms/i-i-s-p-a-r-k-o-m-a-t-парк-место-l';
import IISPARKOMATПаркоматLForm from './forms/i-i-s-p-a-r-k-o-m-a-t-паркомат-l';
import IISPARKOMATТерминалLForm from './forms/i-i-s-p-a-r-k-o-m-a-t-терминал-l';
import IISPARKOMATУслугаLForm from './forms/i-i-s-p-a-r-k-o-m-a-t-услуга-l';
import IISPARKOMATВодительEForm from './forms/i-i-s-p-a-r-k-o-m-a-t-водитель-e';
import IISPARKOMATПаркМестоEForm from './forms/i-i-s-p-a-r-k-o-m-a-t-парк-место-e';
import IISPARKOMATПаркоматEForm from './forms/i-i-s-p-a-r-k-o-m-a-t-паркомат-e';
import IISPARKOMATТерминалEForm from './forms/i-i-s-p-a-r-k-o-m-a-t-терминал-e';
import IISPARKOMATУслугаEForm from './forms/i-i-s-p-a-r-k-o-m-a-t-услуга-e';
import IISPARKOMATАвтомобильModel from './models/i-i-s-p-a-r-k-o-m-a-t-автомобиль';
import IISPARKOMATВодительModel from './models/i-i-s-p-a-r-k-o-m-a-t-водитель';
import IISPARKOMATЗаписьModel from './models/i-i-s-p-a-r-k-o-m-a-t-запись';
import IISPARKOMATПаркМестоModel from './models/i-i-s-p-a-r-k-o-m-a-t-парк-место';
import IISPARKOMATПаркоматModel from './models/i-i-s-p-a-r-k-o-m-a-t-паркомат';
import IISPARKOMATТерминалModel from './models/i-i-s-p-a-r-k-o-m-a-t-терминал';
import IISPARKOMATУслугаModel from './models/i-i-s-p-a-r-k-o-m-a-t-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-p-a-r-k-o-m-a-t-автомобиль': IISPARKOMATАвтомобильModel,
    'i-i-s-p-a-r-k-o-m-a-t-водитель': IISPARKOMATВодительModel,
    'i-i-s-p-a-r-k-o-m-a-t-запись': IISPARKOMATЗаписьModel,
    'i-i-s-p-a-r-k-o-m-a-t-парк-место': IISPARKOMATПаркМестоModel,
    'i-i-s-p-a-r-k-o-m-a-t-паркомат': IISPARKOMATПаркоматModel,
    'i-i-s-p-a-r-k-o-m-a-t-терминал': IISPARKOMATТерминалModel,
    'i-i-s-p-a-r-k-o-m-a-t-услуга': IISPARKOMATУслугаModel
  },

  'application-name': 'PARKOMAT',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'PARKOMAT',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'PARKOMAT',
          title: 'PARKOMAT'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        услуга: {
          caption: 'Услуга',
          title: 'Услуга',
          'i-i-s-p-a-r-k-o-m-a-t-услуга-l': {
            caption: 'Услуга',
            title: ''
          }
        },
        водитель: {
          caption: 'Водитель',
          title: 'Водитель',
          'i-i-s-p-a-r-k-o-m-a-t-водитель-l': {
            caption: 'Водитель',
            title: 'Водитель'
          }
        },
        паркомат: {
          caption: 'Паркомат',
          title: 'Паркомат',
          'i-i-s-p-a-r-k-o-m-a-t-паркомат-l': {
            caption: 'Паркомат',
            title: 'Паркомат'
          },
          'i-i-s-p-a-r-k-o-m-a-t-терминал-l': {
            caption: 'Терминал',
            title: 'Терминал'
          },
          'i-i-s-p-a-r-k-o-m-a-t-парк-место-l': {
            caption: 'Парковочное место',
            title: 'Парк место'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-p-a-r-k-o-m-a-t-водитель-l': IISPARKOMATВодительLForm,
    'i-i-s-p-a-r-k-o-m-a-t-парк-место-l': IISPARKOMATПаркМестоLForm,
    'i-i-s-p-a-r-k-o-m-a-t-паркомат-l': IISPARKOMATПаркоматLForm,
    'i-i-s-p-a-r-k-o-m-a-t-терминал-l': IISPARKOMATТерминалLForm,
    'i-i-s-p-a-r-k-o-m-a-t-услуга-l': IISPARKOMATУслугаLForm,
    'i-i-s-p-a-r-k-o-m-a-t-водитель-e': IISPARKOMATВодительEForm,
    'i-i-s-p-a-r-k-o-m-a-t-парк-место-e': IISPARKOMATПаркМестоEForm,
    'i-i-s-p-a-r-k-o-m-a-t-паркомат-e': IISPARKOMATПаркоматEForm,
    'i-i-s-p-a-r-k-o-m-a-t-терминал-e': IISPARKOMATТерминалEForm,
    'i-i-s-p-a-r-k-o-m-a-t-услуга-e': IISPARKOMATУслугаEForm
  },

});

export default translations;
