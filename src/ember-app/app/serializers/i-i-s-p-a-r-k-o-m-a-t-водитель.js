import { Serializer as ВодительSerializer } from
  '../mixins/regenerated/serializers/i-i-s-p-a-r-k-o-m-a-t-водитель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВодительSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
