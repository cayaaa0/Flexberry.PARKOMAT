import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'PARKOMAT',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'PARKOMAT',
          title: 'PARKOMAT'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
