import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуга.caption'),
          title: i18n.t('forms.application.sitemap.услуга.title'),
          children: [{
            link: 'i-i-s-p-a-r-k-o-m-a-t-услуга-l',
            caption: i18n.t('forms.application.sitemap.услуга.i-i-s-p-a-r-k-o-m-a-t-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.услуга.i-i-s-p-a-r-k-o-m-a-t-услуга-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.водитель.caption'),
          title: i18n.t('forms.application.sitemap.водитель.title'),
          children: [{
            link: 'i-i-s-p-a-r-k-o-m-a-t-водитель-l',
            caption: i18n.t('forms.application.sitemap.водитель.i-i-s-p-a-r-k-o-m-a-t-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.водитель.i-i-s-p-a-r-k-o-m-a-t-водитель-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.паркомат.caption'),
          title: i18n.t('forms.application.sitemap.паркомат.title'),
          children: [{
            link: 'i-i-s-p-a-r-k-o-m-a-t-паркомат-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-p-a-r-k-o-m-a-t-паркомат-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-p-a-r-k-o-m-a-t-паркомат-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-p-a-r-k-o-m-a-t-терминал-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-p-a-r-k-o-m-a-t-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-p-a-r-k-o-m-a-t-терминал-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-p-a-r-k-o-m-a-t-парк-место-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-p-a-r-k-o-m-a-t-парк-место-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-p-a-r-k-o-m-a-t-парк-место-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})