import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit() {
      this.set('isEditing', true);
    },
    save() {
      this.set('isEditing', false);
      this.set('label', 'Edit');
      return true;
    }
  }
});
