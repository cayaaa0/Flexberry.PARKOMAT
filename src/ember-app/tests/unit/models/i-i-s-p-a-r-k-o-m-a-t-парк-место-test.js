import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-p-a-r-k-o-m-a-t-парк-место', 'Unit | Model | i-i-s-p-a-r-k-o-m-a-t-парк-место', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-p-a-r-k-o-m-a-t-автомобиль',
    'model:i-i-s-p-a-r-k-o-m-a-t-водитель',
    'model:i-i-s-p-a-r-k-o-m-a-t-запись',
    'model:i-i-s-p-a-r-k-o-m-a-t-парк-место',
    'model:i-i-s-p-a-r-k-o-m-a-t-паркомат',
    'model:i-i-s-p-a-r-k-o-m-a-t-терминал',
    'model:i-i-s-p-a-r-k-o-m-a-t-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
