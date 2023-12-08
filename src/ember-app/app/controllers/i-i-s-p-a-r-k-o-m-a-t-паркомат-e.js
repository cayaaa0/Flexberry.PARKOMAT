import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-p-a-r-k-o-m-a-t-паркомат-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-p-a-r-k-o-m-a-t-запись+паркМесто':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номер',
            required: true,
            relationName: 'паркМесто',
            projection: 'ПаркМестоL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-p-a-r-k-o-m-a-t-запись+услуга':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'длительность',
            required: true,
            relationName: 'услуга',
            projection: 'УслугаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
