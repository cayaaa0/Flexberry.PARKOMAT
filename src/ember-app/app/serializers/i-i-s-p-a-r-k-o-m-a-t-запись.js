import { Serializer as ЗаписьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-p-a-r-k-o-m-a-t-запись';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
