import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-p-a-r-k-o-m-a-t-водитель', 'Unit | Serializer | i-i-s-p-a-r-k-o-m-a-t-водитель', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-p-a-r-k-o-m-a-t-водитель',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-p-a-r-k-o-m-a-t-оплата',
    'transform:i-i-s-p-a-r-k-o-m-a-t-статусы',
    'transform:i-i-s-p-a-r-k-o-m-a-t-услуги',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
