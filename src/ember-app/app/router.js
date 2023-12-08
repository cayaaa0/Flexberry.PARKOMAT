import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-p-a-r-k-o-m-a-t-водитель-l');
  this.route('i-i-s-p-a-r-k-o-m-a-t-водитель-e',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-водитель-e/:id' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-водитель-e.new',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-водитель-e/new' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-парк-место-l');
  this.route('i-i-s-p-a-r-k-o-m-a-t-парк-место-e',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-парк-место-e/:id' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-парк-место-e.new',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-парк-место-e/new' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-паркомат-l');
  this.route('i-i-s-p-a-r-k-o-m-a-t-паркомат-e',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-паркомат-e/:id' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-паркомат-e.new',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-паркомат-e/new' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-терминал-l');
  this.route('i-i-s-p-a-r-k-o-m-a-t-терминал-e',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-терминал-e/:id' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-терминал-e.new',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-терминал-e/new' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-услуга-l');
  this.route('i-i-s-p-a-r-k-o-m-a-t-услуга-e',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-услуга-e/:id' });
  this.route('i-i-s-p-a-r-k-o-m-a-t-услуга-e.new',
  { path: 'i-i-s-p-a-r-k-o-m-a-t-услуга-e/new' });
});

export default Router;
