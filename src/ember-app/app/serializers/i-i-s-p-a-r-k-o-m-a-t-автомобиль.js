import { Serializer as АвтомобильSerializer } from
  '../mixins/regenerated/serializers/i-i-s-p-a-r-k-o-m-a-t-автомобиль';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АвтомобильSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
