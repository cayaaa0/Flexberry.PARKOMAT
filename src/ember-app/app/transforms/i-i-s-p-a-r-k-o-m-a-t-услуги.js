import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугиEnum from '../enums/i-i-s-p-a-r-k-o-m-a-t-услуги';

export default FlexberryEnum.extend({
  enum: УслугиEnum,
  sourceType: 'IIS.PARKOMAT.Услуги'
});
