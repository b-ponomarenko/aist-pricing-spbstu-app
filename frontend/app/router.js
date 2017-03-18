import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accessories');
  this.route('attributes');
  this.route('categories', function() {
    this.route('show', { path: '/categories/:id' });
  });
});

export default Router;
