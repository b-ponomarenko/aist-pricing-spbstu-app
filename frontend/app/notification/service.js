import Ember from "ember";

toastr.options = {
  "positionClass": "toast-bottom-right",
  "closeButton": true
};

export default Ember.Service.extend({
  error(msg) {
    toastr.error(msg);
  }
});
